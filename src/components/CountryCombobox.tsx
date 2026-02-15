import { useState, useRef, useEffect } from 'react'
import { ChevronDown, AlertCircle } from 'lucide-react'
import { cn } from '@/utils/cn'

interface Country {
  code: string
  name: string
  flag?: string
}

interface CountryComboboxProps {
  id: string
  value: string
  onChange: (value: string) => void
  countries: Country[]
  placeholder?: string
  error?: string
  required?: boolean
  label: string
  noResultsText?: string
  withFlags?: boolean
}

export function CountryCombobox({
  id,
  value,
  onChange,
  countries,
  placeholder = '',
  error,
  required = false,
  label,
  noResultsText = 'Aucun résultat',
  withFlags = false,
}: CountryComboboxProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
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
    setSearchTerm(e.target.value)
    setIsOpen(true)
    setHighlightedIndex(-1)
  }

  const handleInputClick = () => {
    setIsOpen(true)
  }

  const handleSelect = (country: Country) => {
    onChange(country.name)
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
          prev < filteredCountries.length - 1 ? prev + 1 : prev
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setHighlightedIndex(prev => (prev > 0 ? prev - 1 : 0))
        break
      case 'Enter':
        e.preventDefault()
        if (highlightedIndex >= 0 && highlightedIndex < filteredCountries.length) {
          const country = filteredCountries[highlightedIndex]
          if (country) handleSelect(country)
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

  const selectedCountry = countries.find((c) => c.name === value)
  const displayValue = isOpen
    ? searchTerm
    : withFlags && selectedCountry?.flag
      ? `${selectedCountry.flag} ${value}`
      : value

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-[var(--brand-text)] leading-3">
        {label}
        {required && <span className="text-[var(--brand-error)] ml-0.5">*</span>}
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
          className={cn(
            "flex h-10 w-full rounded-md border border-[var(--input)] bg-[var(--background)] px-3 pr-10 py-2 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2",
            error && 'border-[var(--brand-error)] focus-visible:ring-[var(--brand-error)]'
          )}
        />
        <ChevronDown
          className={cn(
            "absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none transition-transform",
            isOpen && 'rotate-180'
          )}
        />
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-50 w-full mt-1 bg-white border border-slate-300 rounded-md shadow-lg max-h-60 overflow-y-auto"
        >
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country, index) => (
              <div
                key={country.code}
                onClick={() => handleSelect(country)}
                className={cn(
                  'px-4 py-2.5 cursor-pointer transition-colors',
                  index === highlightedIndex
                    ? 'bg-[var(--brand-primary)] text-white'
                    : value === country.name
                    ? 'bg-slate-100'
                    : 'hover:bg-slate-50'
                )}
              >
                {withFlags && country.flag ? `${country.flag} ${country.name}` : country.name}
              </div>
            ))
          ) : (
            <div className="px-4 py-2.5 text-slate-500 text-sm">{noResultsText}</div>
          )}
        </div>
      )}
      </div>
      {error && (
        <div className="form-error-inline-tight">
          <AlertCircle className="form-error-icon" />
          <span>{error}</span>
        </div>
      )}
    </div>
  )
}
