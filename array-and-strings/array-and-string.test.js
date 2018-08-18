const {
  isUnique,
  isUniqueNoDS,
  isPermutation,
  bomberMan,
  toggleRow,
  toggleColumn,
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

  describe('bomberMan', () => {
    it('toggleRow helper method replaces a given row with all zeroes', () => {
      const input = [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ];

      const expectedOutput = [
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ];

      const output = toggleRow(input, 1);

      expect(output).toEqual(expectedOutput);
    });

    it('toggleColumn helper method replaces a given column with all zeroes', () => {
      const input = [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ];

      const expectedOutput = [
        [1, 1, 0, 1],
        [1, 1, 0, 1],
        [1, 1, 0, 1],
        [1, 1, 0, 1],
        [1, 1, 0, 1],
      ];

      const output = toggleColumn(input, 2);

      expect(output).toEqual(expectedOutput);
    });

    it('given an M x N matrix, if any element is 0, its entire column and row is set to 0', () => {
      const input = [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ];

      const expectedOutput = [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ];

      const output = bomberMan(input);

      expect(output).toEqual(expectedOutput);
    });

    it('given an M x N matrix, if any element is 0, its entire column and row is set to 0', () => {
      const input = [
        [0, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ];

      const expectedOutput = [
        [0, 0, 0, 0],
        [0, 1, 1, 1],
        [0, 1, 1, 1],
        [0, 1, 1, 1],
        [0, 1, 1, 1],
      ];

      const output = bomberMan(input);

      expect(output).toEqual(expectedOutput);
    });

    it('given an M x N matrix, if any element is 0, its entire column and row is set to 0', () => {
      const input = [
        [0, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 0, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ];

      const expectedOutput = [
        [0, 0, 0, 0],
        [0, 1, 0, 1],
        [0, 0, 0, 0],
        [0, 1, 0, 1],
        [0, 1, 0, 1],
      ];

      const output = bomberMan(input);

      expect(output).toEqual(expectedOutput);
    });

    it('given an M x N matrix, if any element is 0, its entire column and row is set to 0', () => {
      const input = [
        [0, 1, 0, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ];

      const expectedOutput = [
        [0, 0, 0, 0],
        [0, 1, 0, 1],
        [0, 1, 0, 1],
        [0, 1, 0, 1],
        [0, 1, 0, 1],
      ];

      const output = bomberMan(input);

      expect(output).toEqual(expectedOutput);
    });
  });
});
