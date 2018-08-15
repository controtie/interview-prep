const {
  rotateMatrix,
  rotateMatrixInPlace,
  firstSwap,
  secondSwap,
  thirdSwap,
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

describe('RotateMatrixInPlace', () => {
  it('firstSwap should swap [0, i] and [i, matrixLength] positions', () => {
    const input = [
      [1, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];

    const expectedOutput = [
      [0, 0, 0, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];

    const output = firstSwap(input.slice(), 0);
    expect(output).toEqual(expectedOutput);
  });

  it('firstSwap should swap [0, i] and [i, matrixLength] positions for an entire row', () => {
    const input = [
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];

    const expectedOutput = [
      [0, 0, 0, 1],
      [0, 0, 0, 1],
      [0, 0, 0, 1],
      [0, 0, 0, 0]
    ];

    const output1 = firstSwap(input.slice(), 0);
    const output2 = firstSwap(output1.slice(), 1);
    const output3 = firstSwap(output2.slice(), 2);
    expect(output3).toEqual(expectedOutput);
  });

  it('firstSwap should swap [0, i] and [i, matrixLength] positions for an entire row according to offsets', () => {
    const input = [
      [1, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];

    const expectedOutput = [
      [1, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];

    const output1 = firstSwap(input.slice(), 0, 1);
    expect(output1).toEqual(expectedOutput);
  });

  it('secondSwap should swap [0, i] and [matrixLength - i, 0] positions for a row', () => {
    const input = [
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];

    const expectedOutput = [
      [0, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0]
    ];

    const output1 = secondSwap(input.slice(), 0);
    const output2 = secondSwap(output1.slice(), 1);
    const output3 = secondSwap(output2.slice(), 2);
    expect(output3).toEqual(expectedOutput);
  });

  it('secondSwap should swap [0, i] and [matrixLength - i, 0] positions for a row, according to offset', () => {
    const input = [
      [1, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];

    const expectedOutput = [
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0]
    ];

    const output1 = secondSwap(input.slice(), 0, 1);
    expect(output1).toEqual(expectedOutput);
  });

  it('thirdSwap should swap [matrixLength -1, matrixLength] and [matrixLength - i, 0] positions for a row', () => {

    const input = [
      [0, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0]
    ];

    const expectedOutput = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 1, 1, 1]
    ];

    const output1 = thirdSwap(input.slice(), 0);
    const output2 = thirdSwap(output1.slice(), 1);
    const output3 = thirdSwap(output2.slice(), 2);
    expect(output3).toEqual(expectedOutput);
  });


  it('thirdSwap should swap [matrixLength -1, matrixLength] and [matrixLength - i, 0] positions for a row, according to offsets', () => {
    const input = [
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0]
    ];

    const expectedOutput = [
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0]
    ];

    const output1 = thirdSwap(input.slice(), 0, 1);
    expect(output1).toEqual(expectedOutput);
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

    const computedOutput = rotateMatrixInPlace(input);

    expect(computedOutput).toEqual(expectedOutput);
  });


  it('should rotate a 5x5 array 90 degrees', () => {
    const input = [
      [1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];

    const expectedOutput = [
      [0, 0, 1, 0, 1],
      [0, 1, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
    ];

    const computedOutput = rotateMatrixInPlace(input);

    expect(computedOutput).toEqual(expectedOutput);
  });

});

