import { fractionToDecimal, stringToFraction } from './index';
describe('fractionToDecimal', () => {
  test('1100', () => {
    expect(fractionToDecimal('1100')).toBe(12);
  });
  test('0.0011', () => {
    expect(fractionToDecimal('0.0011')).toBe(0.1875);
  });
  test('-1100.0011', () => {
    expect(fractionToDecimal('-1100.0011')).toBe(-12.1875);
  });
});
describe('stringToFractions', () => {
  test('4', () => {
    expect(stringToFraction('4')).toBe('100');
  });
  xtest('4 1/2', () => {
    expect(stringToFraction('4 1/2')).toBe('100.1');
  });
});
