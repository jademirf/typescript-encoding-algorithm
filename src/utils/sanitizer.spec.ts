import { sanitize } from './sanitizer';
describe('Sanitizer function', () => {
  it('should remove blank spaces and uppercases', () => {
    const originalText = "Some VERY important text to encode"

    const cleanText = sanitize(originalText)

    expect(cleanText).toEqual('someveryimportanttexttoencode')
  })

  it('should remove special characters', () => {
    const originalText = "Some very important text to encode!@$%¨&"

    const cleanText = sanitize(originalText)

    expect(cleanText).toEqual('someveryimportanttexttoencode')
  })
})