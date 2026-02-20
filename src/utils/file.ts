import imageCompression from 'browser-image-compression'

const COMPRESSION_OPTIONS = {
  maxSizeMB: 1,
  maxWidthOrHeight: 1920,
  useWebWorker: false,       // disabled for Power Pages CSP compatibility
  fileType: 'image/jpeg' as const,
  initialQuality: 0.8,
} as const

function isImage(file: File): boolean {
  return file.type.startsWith('image/')
}

function readAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result as string
      const base64 = result.split(',')[1] ?? ''
      resolve(base64)
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

export async function fileToBase64(file: File): Promise<string> {
  if (isImage(file)) {
    const compressed = await imageCompression(file, COMPRESSION_OPTIONS)
    return readAsBase64(compressed)
  }
  return readAsBase64(file)
}
