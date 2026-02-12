import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Search } from 'lucide-react'
import { cn } from '@/utils/cn'
import { getPhoneCodes, formatPhoneNumber } from '@/utils/phone'

interface PhoneInputProps {
  value: string
  onChange: (value: string) => void
  countryCode: string
  onCountryCodeChange: (code: string) => void
  placeholder?: string
  className?: string
}

export function PhoneInput({
  value,
  onChange,
  countryCode,
  onCountryCodeChange,
  placeholder = 'Phone number',
  className,
}: PhoneInputProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)

  const phoneCodes = getPhoneCodes()
  const selectedCode = phoneCodes.find((c) => c.code === countryCode)
  const filtered = search
    ? phoneCodes.filter(
        (c) =>
          c.country.toLowerCase().includes(search.toLowerCase()) ||
          c.dialCode.includes(search)
      )
    : phoneCodes

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

  return (
    <div ref={containerRef} className={cn('relative flex gap-2', className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 items-center gap-1 rounded-md border border-[var(--input)] bg-white px-3 text-sm cursor-pointer hover:bg-slate-50"
      >
        <span>{selectedCode?.dialCode ?? '+41'}</span>
        <ChevronDown className="h-3 w-3 text-slate-400" />
      </button>

      <input
        type="tel"
        value={formatPhoneNumber(value, countryCode)}
        onChange={(e) => onChange(e.target.value.replace(/\D/g, ''))}
        placeholder={placeholder}
        className="form-input flex-1 rounded-md border border-[var(--input)] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2"
      />

      {isOpen && (
        <div className="absolute left-0 top-14 z-50 w-64 rounded-md border bg-white shadow-lg">
          <div className="flex items-center gap-2 border-b px-3 py-2">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full border-none bg-transparent text-sm outline-none"
              autoFocus
            />
          </div>
          <div className="max-h-60 overflow-y-auto p-1">
            {filtered.map((code) => (
              <button
                key={code.code}
                type="button"
                onClick={() => {
                  onCountryCodeChange(code.code)
                  setIsOpen(false)
                  setSearch('')
                }}
                className={cn(
                  'w-full rounded-sm px-3 py-2 text-left text-sm cursor-pointer hover:bg-slate-100',
                  code.code === countryCode && 'font-medium text-[var(--brand-primary)]'
                )}
              >
                {code.country} ({code.dialCode})
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
