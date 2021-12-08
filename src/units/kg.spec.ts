import { KG } from "./kg"

describe('KG', () => {
  it('get value should return the value', () => {
    // Given
    const weight = new KG(2);

    // When
    const v = weight.value;

    // Then
    expect(v).toEqual(2);
  })

  it('toString should return 2kg', () => {
    // Given
    const weight = new KG(2);

    // When
    const v = weight.toString();

    // Then
    expect(v).toEqual('2kg');

  })
})
