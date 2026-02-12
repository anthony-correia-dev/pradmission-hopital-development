import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Search } from 'lucide-react'
import { cn } from '@/utils/cn'
import { getCountries } from '@/utils/country'
import type { Language } from '@/types/form'

interface CountryComboboxProps {
  value: string
  onChange: (value: string) => void
  language: Language
  placeholder?: string
  searchPlaceholder?: string
  error?: string
  className?: string
}

export function CountryCombobox({
  value,
  onChange,
  language,
  placeholder = 'Select...',
  searchPlaceholder = 'Search...',
  error,
  className,
}: CountryComboboxProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [highlightedIndex, setHighlightedIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const countries = getCountries(language)
  const filtered = search
    ? countries.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      )
    : countries

  const selectedCountry = countries.find((c) => c.name === value)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
        setSearch('')
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
      setHighlightedIndex(0)
    }
  }, [isOpen])

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
        onChange(item.name)
        setIsOpen(false)
        setSearch('')
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false)
      setSearch('')
    }
  }

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex h-12 w-full items-center justify-between rounded-md border bg-white px-4 py-2 text-sm cursor-pointer',
          error
            ? 'border-[var(--brand-error)] focus:ring-[var(--brand-error)]'
            : 'border-[var(--input)] focus:ring-[var(--ring)]',
          'focus:outline-none focus:ring-2 focus:ring-offset-2'
        )}
      >
        <span className={selectedCountry ? 'text-[var(--brand-text)]' : 'text-slate-400'}>
          {selectedCountry?.name ?? placeholder}
        </span>
        <ChevronDown className="h-4 w-4 text-slate-400" />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-1 w-full rounded-md border bg-white shadow-lg">
          <div className="flex items-center gap-2 border-b px-3 py-2">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              ref={inputRef}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setHighlightedIndex(0)
              }}
              onKeyDown={handleKeyDown}
              placeholder={searchPlaceholder}
              className="w-full border-none bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>
          <div ref={listRef} className="max-h-60 overflow-y-auto p-1">
            {filtered.length === 0 ? (
              <div className="px-3 py-2 text-sm text-slate-500">No results</div>
            ) : (
              filtered.map((country, i) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => {
                    onChange(country.name)
                    setIsOpen(false)
                    setSearch('')
                  }}
                  className={cn(
                    'w-full rounded-sm px-3 py-2 text-left text-sm cursor-pointer',
                    i === highlightedIndex && 'bg-slate-100',
                    country.name === value && 'font-medium text-[var(--brand-primary)]'
                  )}
                >
                  {country.name}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}
