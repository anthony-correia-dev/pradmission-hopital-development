import { useState, useRef, useEffect, useMemo } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@/utils/cn'
import csvData from '@/assets/documents/list_med.csv?raw'

interface DoctorComboboxProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  noResults?: string
  className?: string
}

export function DoctorCombobox({
  value,
  onChange,
  placeholder = 'Search...',
  noResults = 'No results',
  className,
}: DoctorComboboxProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState(value)
  const [highlightedIndex, setHighlightedIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const doctors = useMemo(() => {
    const lines = csvData.split('\n')
    // Skip header line
    return lines
      .slice(1)
      .map((line) => line.split(';')[0]?.trim() ?? '')
      .filter((name) => name.length > 0)
  }, [])

  const filtered = useMemo(() => {
    if (search.length < 3) return []
    return doctors
      .filter((d) => d.toLowerCase().includes(search.toLowerCase()))
      .slice(0, 50)
  }, [search, doctors])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    setSearch(value)
  }, [value])

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlightedIndex((i) => Math.min(i + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlightedIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const item = filtered[highlightedIndex]
      if (item) {
        onChange(item)
        setSearch(item)
        setIsOpen(false)
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          ref={inputRef}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setHighlightedIndex(0)
            setIsOpen(e.target.value.length >= 3)
            if (e.target.value !== value) {
              onChange(e.target.value)
            }
          }}
          onFocus={() => {
            if (search.length >= 3) setIsOpen(true)
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="form-input pl-10 rounded-md border border-[var(--input)] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2"
        />
      </div>

      {isOpen && filtered.length > 0 && (
        <div className="absolute z-50 mt-1 w-full rounded-md border bg-white shadow-lg">
          <div className="max-h-60 overflow-y-auto p-1">
            {filtered.map((doctor, i) => (
              <button
                key={`${doctor}-${i}`}
                type="button"
                onClick={() => {
                  onChange(doctor)
                  setSearch(doctor)
                  setIsOpen(false)
                }}
                className={cn(
                  'w-full rounded-sm px-3 py-2 text-left text-sm cursor-pointer',
                  i === highlightedIndex && 'bg-slate-100'
                )}
              >
                {doctor}
              </button>
            ))}
          </div>
        </div>
      )}

      {isOpen && search.length >= 3 && filtered.length === 0 && (
        <div className="absolute z-50 mt-1 w-full rounded-md border bg-white shadow-lg">
          <div className="px-3 py-2 text-sm text-slate-500">{noResults}</div>
        </div>
      )}
    </div>
  )
}
