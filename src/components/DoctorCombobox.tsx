import { useState, useRef, useEffect } from 'react'
import { ChevronDown, AlertCircle } from 'lucide-react'
import csvData from '@/assets/documents/list_med.csv?raw'

interface Doctor {
  name: string
}

interface DoctorComboboxProps {
  id: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  error?: string
  required?: boolean
  label: string
  noResultsText?: string
  optionalText?: string
}

export function DoctorCombobox({
  id,
  value,
  onChange,
  placeholder = '',
  error,
  required = false,
  label,
  noResultsText = 'Aucun résultat',
  optionalText
}: DoctorComboboxProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const [doctors, setDoctors] = useState<Doctor[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadDoctors = () => {
      try {
        const lines = csvData.split('\n').filter(line => line.trim())
        const doctorList: Doctor[] = lines.slice(1).map(line => {
          const parts = line.split(';')
          const name = parts[0]?.trim() || ''
          return { name }
        }).filter(doc => doc.name)
        
        const sortedDoctors = doctorList.sort((a, b) => {
          return a.name.localeCompare(b.name, 'fr', { 
            sensitivity: 'base',
            ignorePunctuation: true,
            numeric: true
          })
        })
        
        setDoctors(sortedDoctors)
      } catch (error) {
        console.error('Error loading doctors:', error)
      }
    }
    loadDoctors()
  }, [])

  const searchValue = searchTerm || value
  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchValue.toLowerCase())
  )

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
    const newValue = e.target.value
    onChange(newValue)
    setSearchTerm(newValue)
    setIsOpen(newValue.length >= 3)
    setHighlightedIndex(-1)
  }

  const handleInputClick = () => {
    if (value.length >= 3) {
      setSearchTerm(value)
      setIsOpen(true)
    }
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
          prev < filteredDoctors.length - 1 ? prev + 1 : prev
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setHighlightedIndex(prev => (prev > 0 ? prev - 1 : 0))
        break
      case 'Enter':
        e.preventDefault()
        if (highlightedIndex >= 0 && highlightedIndex < filteredDoctors.length) {
          handleSelect(filteredDoctors[highlightedIndex])
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

  const displayValue = searchTerm || value

  return (
    <div className="relative">
      <label htmlFor={id} className="block text-sm font-medium text-brand-text mb-2">
        {label} {required ? <span className="text-brand-error">*</span> : optionalText && <span className="text-slate-500 text-xs">({optionalText})</span>}
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
          className={`w-full h-12 px-4 pr-10 rounded-md border transition-all ${
            error
              ? 'border-brand-error focus:ring-2 focus:ring-brand-error focus:border-transparent'
              : 'border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent'
          }`}
        />
        <ChevronDown
          className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>
      {isOpen && searchValue.length >= 3 && (
        <div
          ref={dropdownRef}
          className="absolute z-50 w-full mt-1 bg-white border border-slate-300 rounded-md shadow-lg max-h-60 overflow-y-auto"
        >
          {filteredDoctors.length > 0 ? (
            filteredDoctors.slice(0, 50).map((doctor, index) => (
              <div
                key={index}
                onClick={() => handleSelect(doctor)}
                className={`px-4 py-2.5 cursor-pointer transition-colors ${
                  index === highlightedIndex
                    ? 'bg-brand-primary text-white'
                    : value === doctor.name
                    ? 'bg-slate-100'
                    : 'hover:bg-slate-50'
                }`}
              >
                {doctor.name}
              </div>
            ))
          ) : (
            <div className="px-4 py-2.5 text-slate-500 text-sm">{noResultsText}</div>
          )}
        </div>
      )}
      {error && (
        <div className="flex items-center gap-2 mt-1 text-brand-error text-sm">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}
    </div>
  )
}
