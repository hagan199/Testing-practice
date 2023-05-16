const { string } = require('yargs');
const stringLength = require('../Functions/stringLength.js');
describe('stringLength', () => {
  it('should returns the length of a string', () => {
    expect(stringLength('hagan')).toBe(5);
  });
  it('should throw an error if the length is empty', () => {
    expect(stringLength("")).toBe("invalid length")

  });
  it('should throw an error if the length more than 10 string', () => {
    expect(stringLength("hagan.Emmanuel")).toBe("invalid length")
  });
});