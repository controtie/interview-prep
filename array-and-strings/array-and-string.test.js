const {
  isUnique,
  isUniqueNoDS,
}= require('./array-and-strings-1');

describe('string-and-arrays', () => {
  describe('isUnique', () => {
    it('returns true for strings without duplicate characters', () => {
      const input = 'no duplicates';
      const expectedOutput = true;

      const output = isUnique(input);

      expect(output).toEqual(expectedOutput);
    });

    it('returns false for strings with duplicate characters', () => {
      const input = 'with duplicates';
      const expectedOutput = false;

      const output = isUnique(input);

      expect(output).toEqual(expectedOutput);
    });
  });

  describe('isUnique without datastructures', () => {
    it('returns true for strings without duplicate characters', () => {
      const input = 'no duplicates';
      const expectedOutput = true;

      const output = isUniqueNoDS(input);

      expect(output).toEqual(expectedOutput);
    });

    it('returns false for strings with duplicate characters', () => {
      const input = 'with duplicates';
      const expectedOutput = false;

      const output = isUniqueNoDS(input);

      expect(output).toEqual(expectedOutput);
    });
  });
});
