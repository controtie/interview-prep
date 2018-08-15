const {
  rotateMatrix,
  createNewRow,
}= require('./rotate-matrix');

describe('RotateMatrix', () => {
  it('should return a new matrix', () => {
    const result = rotateMatrix([]);
    expect(Array.isArray(result)).toBe(true);
  });

  it('createNewRow should select a reversed order column from a matrix', () => {
    const inputMatrx = [[1, 0], [0, 0]];
    const expectedOutput1 = [0, 1];
    const expectedOutput2 = [0, 0];

    const computedOutput1 = createNewRow(inputMatrx, 0);
    const computedOutput2 = createNewRow(inputMatrx, 1);

    expect(computedOutput1).toEqual(expectedOutput1);
    expect(computedOutput2).toEqual(expectedOutput2);
  });

  it('createNewRow should select a reversed order column from a 3x3 matrix', () => {
    const inputMatrx = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
    const expectedOutput1 = [0, 0, 1];
    const expectedOutput2 = [0, 1, 0];
    const expectedOutput3 = [1, 0, 0];

    const computedOutput1 = createNewRow(inputMatrx, 0);
    const computedOutput2 = createNewRow(inputMatrx, 1);
    const computedOutput3 = createNewRow(inputMatrx, 2);

    expect(computedOutput1).toEqual(expectedOutput1);
    expect(computedOutput2).toEqual(expectedOutput2);
    expect(computedOutput3).toEqual(expectedOutput3);
  });

  it('should rotate a 2x2 array 90 degrees', () => {
    const input = [[1, 0], [0, 0]];
    const expectedOutput = [[0, 1], [0, 0]];

    const computedOutput = rotateMatrix(input);

    expect(computedOutput).toEqual(expectedOutput);
  });

  it('should rotate a 4x4 array 90 degrees', () => {
    const input = [
      [1, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 1, 0, 0]
    ];

    const expectedOutput = [
      [0, 1, 0, 1],
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0]
    ];

    const computedOutput = rotateMatrix(input);

    expect(computedOutput).toEqual(expectedOutput);
  });
});
