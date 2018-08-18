const {
  isUnique,
  isUniqueNoDS,
  isPermutation,
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

  describe('isPermutation', () => {
    it('returns true if one string is a permutation of the other', () => {
      const input1 = 'no duplicates';
      const input2 = 'duplicno ates';
      const expectedOutput = true;

      const output = isPermutation(input1, input2);

      expect(output).toEqual(expectedOutput);
    });

    it('returns false if one string is not a permutation of the other', () => {
      const input1 = 'no duplicates!';
      const input2 = 'duplicno ates';
      const expectedOutput = false;

      const output = isPermutation(input1, input2);

      expect(output).toEqual(expectedOutput);
    });
  });
});
