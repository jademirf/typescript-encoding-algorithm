 export function sanitize (rawText:string): string {
  let cleanText = ''

  cleanText = rawText.replace(/\s+/g, '').replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase()

  return cleanText
}