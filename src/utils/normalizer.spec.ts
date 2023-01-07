import { normalize } from './normalizer';
describe('Normalize the string', () => {

  it('should return the text broken into rows', () => {
    const colLength = 4
    const originalText = "abcdefghijklmn"

    const normalizedArray = normalize(originalText)
    expect(normalizedArray).toHaveLength(4)
    expect(normalizedArray[0]).toHaveLength(colLength)
    expect(normalizedArray[0].length).toBeLessThanOrEqual(normalizedArray.length)
  })

})