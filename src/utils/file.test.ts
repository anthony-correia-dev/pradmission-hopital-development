// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { fileToBase64 } from './file'

describe('fileToBase64', () => {
  it('converts a text file to base64', async () => {
    const file = new File(['hello world'], 'test.txt', { type: 'text/plain' })
    const result = await fileToBase64(file)
    expect(result).toBe(btoa('hello world'))
  })

  it('converts an empty file to base64', async () => {
    const file = new File([''], 'empty.txt', { type: 'text/plain' })
    const result = await fileToBase64(file)
    expect(result).toBe('')
  })
})
