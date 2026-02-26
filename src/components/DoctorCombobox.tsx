import { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronDown, Loader2 } from 'lucide-react'
import { cn } from '@/utils/cn'
import { useApi } from '@/hooks/useApi'

interface Doctor {
  id: string
  name: string
}

interface DoctorComboboxProps {
  id: string
  value: string
  onChange: (value: string) => void
  label: string
  placeholder?: string
  noResultsText?: string
  optional?: string
}

export function DoctorCombobox({
  id,
  value,
  onChange,
  label,
  placeholder = '',
  noResultsText = 'Aucun résultat',
  optional,
}: DoctorComboboxProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState<Doctor[]>([])
  const [loading, setLoading] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(null)
  const api = useApi()

  const searchDoctors = useCallback(async (query: string) => {
    if (!query.trim()) {
      setResults([])
      setLoading(false)
      return
    }
    setLoading(true)
    try {
      const data = await api.searchDoctors(query)
      setResults(data.doctors)
    } catch {
      setResults([])
    } finally {
      setLoading(false)
    }
  }, [api])

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    if (!searchTerm.trim()) {
      setResults([])
      setLoading(false)
      return
    }
    setLoading(true)
    debounceRef.current = setTimeout(() => {
      void searchDoctors(searchTerm)
    }, 300)
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [searchTerm, searchDoctors])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      setSearchTerm('')
      setHighlightedIndex(-1)
    }
  }, [isOpen])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setIsOpen(true)
    setHighlightedIndex(-1)
  }

  const handleInputClick = () => {
    setIsOpen(true)
  }

  const handleSelect = (doctor: Doctor) => {
    onChange(doctor.name)
    setSearchTerm('')
    setIsOpen(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter') {
        e.preventDefault()
        setIsOpen(true)
      }
      return
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setHighlightedIndex(prev =>
          prev < results.length - 1 ? prev + 1 : prev
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setHighlightedIndex(prev => (prev > 0 ? prev - 1 : 0))
        break
      case 'Enter':
        e.preventDefault()
        if (highlightedIndex >= 0 && highlightedIndex < results.length) {
          const doctor = results[highlightedIndex]
          if (doctor) handleSelect(doctor)
        }
        break
      case 'Escape':
        e.preventDefault()
        setIsOpen(false)
        break
    }
  }

  useEffect(() => {
    if (highlightedIndex >= 0 && dropdownRef.current) {
      const highlightedElement = dropdownRef.current.children[highlightedIndex] as HTMLElement
      if (highlightedElement) {
        highlightedElement.scrollIntoView({ block: 'nearest' })
      }
    }
  }, [highlightedIndex])

  const displayValue = isOpen ? searchTerm : value
  const showDropdown = isOpen && searchTerm.trim().length > 0

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm !font-normal text-[var(--brand-text)] leading-3">
        {label}
        {optional && <span className="text-slate-400 font-normal ml-1">({optional})</span>}
      </label>
      <div className="relative">
        <input
          ref={inputRef}
          id={id}
          type="text"
          value={displayValue}
          onChange={handleInputChange}
          onClick={handleInputClick}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          autoComplete="off"
          className="flex h-10 w-full rounded-md border border-[var(--input)] bg-[var(--background)] px-3 pr-10 py-2 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
        />
        {loading ? (
          <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 animate-spin" />
        ) : (
          <ChevronDown
            className={cn(
              "absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none transition-transform",
              isOpen && 'rotate-180'
            )}
          />
        )}
        {showDropdown && (
          <div
            ref={dropdownRef}
            className="absolute z-50 w-full mt-1 bg-white border border-slate-300 rounded-md shadow-lg max-h-60 overflow-y-auto"
          >
            {loading ? (
              <div className="px-4 py-2.5 text-slate-500 text-sm flex items-center gap-2">
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                Recherche...
              </div>
            ) : results.length > 0 ? (
              results.map((doctor, index) => (
                <div
                  key={doctor.id}
                  onClick={() => handleSelect(doctor)}
                  className={cn(
                    'px-4 py-2.5 cursor-pointer transition-colors text-sm',
                    index === highlightedIndex
                      ? 'bg-[var(--brand-primary)] text-white'
                      : value === doctor.name
                      ? 'bg-slate-100'
                      : 'hover:bg-slate-50'
                  )}
                >
                  {doctor.name}
                </div>
              ))
            ) : (
              <div className="px-4 py-2.5 text-slate-500 text-sm">{noResultsText}</div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
