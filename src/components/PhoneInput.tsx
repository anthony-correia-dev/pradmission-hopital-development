import { useState, useRef, useEffect } from 'react'
import { ChevronDown, AlertCircle } from 'lucide-react'
import { getPhoneCodes, formatPhoneNumber, isValidPhoneNumber } from '../lib/phoneCodes'

interface PhoneInputProps {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  required?: boolean
}

export function PhoneInput({
  id,
  label,
  value,
  onChange,
  error,
  required = false
}: PhoneInputProps) {
  const phoneCodes = getPhoneCodes()
  
  const parseValue = (fullNumber: string) => {
    if (!fullNumber) return { code: 'CH', number: '' }
    
    for (const phoneCode of phoneCodes) {
      if (fullNumber.startsWith(phoneCode.dialCode)) {
        const number = fullNumber.slice(phoneCode.dialCode.length).replace(/\D/g, '')
        return { code: phoneCode.code, number }
      }
    }
    
    return { code: 'CH', number: fullNumber.replace(/\D/g, '') }
  }

  const parsed = parseValue(value)
  const [selectedCode, setSelectedCode] = useState(parsed.code)
  const [phoneNumber, setPhoneNumber] = useState(parsed.number)
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const selectRef = useRef<HTMLButtonElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const parsed = parseValue(value)
    setSelectedCode(parsed.code)
    setPhoneNumber(parsed.number)
  }, [value])

  const filteredCodes = phoneCodes.filter(item =>
    item.dialCode.includes(searchTerm) || item.code.toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
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

  const handleCodeSelect = (code: string) => {
    setSelectedCode(code)
    setIsOpen(false)
    const selectedPhoneCode = phoneCodes.find(p => p.code === code)
    if (selectedPhoneCode) {
      const fullNumber = selectedPhoneCode.dialCode + phoneNumber
      onChange(fullNumber)
    }
    inputRef.current?.focus()
  }

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '')
    setPhoneNumber(digits)
    
    const selectedPhoneCode = phoneCodes.find(p => p.code === selectedCode)
    if (selectedPhoneCode) {
      const fullNumber = selectedPhoneCode.dialCode + digits
      onChange(fullNumber)
    }
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setHighlightedIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setHighlightedIndex(prev =>
          prev < filteredCodes.length - 1 ? prev + 1 : prev
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setHighlightedIndex(prev => (prev > 0 ? prev - 1 : 0))
        break
      case 'Enter':
        e.preventDefault()
        if (highlightedIndex >= 0 && highlightedIndex < filteredCodes.length) {
          handleCodeSelect(filteredCodes[highlightedIndex].code)
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
      const highlightedElement = dropdownRef.current.children[highlightedIndex + 1] as HTMLElement
      if (highlightedElement) {
        highlightedElement.scrollIntoView({ block: 'nearest' })
      }
    }
  }, [highlightedIndex])

  const selectedPhoneCode = phoneCodes.find(p => p.code === selectedCode)
  const formattedNumber = formatPhoneNumber(phoneNumber, selectedCode)

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-brand-text mb-2">
        {label} {required && <span className="text-brand-error">*</span>}
      </label>
      <div className={`flex items-stretch h-12 rounded-md border transition-all ${
        error
          ? 'border-brand-error focus-within:ring-2 focus-within:ring-brand-error focus-within:border-transparent'
          : 'border-slate-300 focus-within:ring-2 focus-within:ring-brand-primary focus-within:border-transparent'
      }`}>
        <div className="relative">
          <button
            ref={selectRef}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="h-full px-3 flex items-center gap-1 border-r border-slate-300 hover:bg-slate-50 transition-colors rounded-l-md min-w-[100px]"
          >
            <span className="text-sm font-medium">{selectedPhoneCode?.dialCode}</span>
            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          {isOpen && (
            <div
              ref={dropdownRef}
              className="absolute z-50 left-0 top-full mt-1 bg-white border border-slate-300 rounded-md shadow-lg w-64 max-h-60 overflow-hidden flex flex-col"
            >
              <div className="p-2 border-b border-slate-200">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Search..."
                  autoFocus
                  className="w-full px-3 py-1.5 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none"
                />
              </div>
              <div className="overflow-y-auto">
                {filteredCodes.length > 0 ? (
                  filteredCodes.map((item, index) => (
                    <div
                      key={item.code}
                      onClick={() => handleCodeSelect(item.code)}
                      className={`px-3 py-2 cursor-pointer transition-colors text-sm ${
                        index === highlightedIndex
                          ? 'bg-brand-primary text-white'
                          : selectedCode === item.code
                          ? 'bg-slate-100'
                          : 'hover:bg-slate-50'
                      }`}
                    >
                      <span className="font-medium">{item.code}</span> {item.dialCode}
                    </div>
                  ))
                ) : (
                  <div className="px-3 py-2 text-slate-500 text-sm">No results</div>
                )}
              </div>
            </div>
          )}
        </div>
        <input
          ref={inputRef}
          id={id}
          type="tel"
          value={formattedNumber}
          onChange={handleNumberChange}
          className="flex-1 px-4 rounded-r-md outline-none bg-transparent"
          placeholder="79 123 45 67"
        />
      </div>
      {error && (
        <div className="flex items-center gap-2 mt-1 text-brand-error text-sm">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}
    </div>
  )
}
