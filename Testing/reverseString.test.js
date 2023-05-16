const reverseString = require('../Functions/reverseString.js');
describe('reverseString', () => {
  it('should reverse a string', () => {
    expect(reverseString('hagan')).toBe('Emmanuel');
    expect(reverseString('Hey')).toBe('Fla');
  });
});