import { normalize } from './normalizer';
describe('Normalize the string', () => {
  it('should return text with 64 char at maximum', () => {
    const originalText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae pretium ante. Morbi ut risus varius, varius mauris ac, ullamcorper libero. Sed laoreet laoreet nisi a accumsan. Donec a ex eu elit tempor auctor pellentesque eget sapien. Aenean auctor, urna eget congue posuere, tellus sem convallis diam, id semper arcu erat nec mauris. Curabitur sit amet nibh ut elit congue vehicula. Praesent elit urna, imperdiet a enim a, varius congue mauris. Mauris accumsan sapien non nisl lacinia maximus. Mauris augue elit, accumsan quis turpis at, blandit faucibus ex. Sed ut odio et libero ornare aliquet et vel turpis."

    const normalizedText = normalize(originalText)

    expect(normalizedText).toHaveLength(64)
  })

  // it('should return a text as a rectangle')

})