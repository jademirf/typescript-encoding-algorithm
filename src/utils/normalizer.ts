 export function normalize (rawText:string): string {
  let normalText = ''
  const textArray = []
  let cols = 0

  if(rawText.length > 64) {
    normalText = rawText.substring(0, 64)
  } else {
    normalText = rawText
  }

  for(let i = 1; i <= 8; i++) {
    if (normalText.length <= (i*i)) {
      cols = i
      break
    }
  }
  const fullColumns = (normalText.length/cols)
  
  for(let i = 0; i <= fullColumns; i++){
    let chunk = ''
    chunk = rawText.substring(i*cols,(i+1)*cols)
    textArray.push(chunk)
  }

  console.log(textArray)

  let result = ''
  for (let i = 0; i <= cols; i++) {
    for (let j = 0; j <= textArray.length; j++) {
      if(textArray[j]) {
        result += textArray[j].substring(i)
      }
      if (result.length == cols) {
        result += ' '
      }
    }
  }

  return result
}