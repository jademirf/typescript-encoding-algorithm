 export function normalize (rawText:string): string {
  let normalText = ''

  if(rawText.length > 64) {
    normalText = rawText.substring(0, 64)
  }

  return normalText
}