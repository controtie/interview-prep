// rotate a matrix n times, where each n = 90 degrees clockwise

const rotateMatrix = (matrix, n = 1) => {
  // read the matrix from bottom to top
  // these will be new entries from left to right

  const newMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    const newRow = createNewRow(matrix, i);
    newMatrix.push(newRow);
  }

  return newMatrix;
};

const createNewRow = (matrix, index) => {
  const newRow = [];
  matrix.forEach(row => {
    newRow.push(row[index]);
  });

  return newRow.reverse();
}

// rotate a matrix _in place_ n times, where each n = 90 degrees clockwise

const rotateMatrixInPlace = (matrix, n = 1) => {
  const requiresFinalSwap = hasFinalSwap(matrix);

  matrix.forEach((row, index) => {
    const iteratorOffest = index * 2;
    for (let i = 0; i < matrix.length - 1 - iteratorOffest; i++) {
      firstSwap(matrix, i, index);
      secondSwap(matrix, i, index);
      thirdSwap(matrix, i, index);
    }
  });

  return matrix;
};

const hasFinalSwap = (matrix) => {
  return matrix % 2 === 0;
};

// offset determines which circle we're operating on
// e.g. a 4x4 grid will have 2 circles which need to be rotated
// a 6x6 grid will have 3 circles that need to be rotated
const firstSwap = (inputMatrix, i, offset = 0) => {
  // 0, i and i, length

  let temp = inputMatrix[0 + offset][i + offset];
  let length = inputMatrix.length - 1;

  inputMatrix[0 + offset][i + offset] = inputMatrix[i + offset][length - offset];
  inputMatrix[i + offset][length - offset] = temp;

  return inputMatrix;
}

const secondSwap = (inputMatrix, i, offset = 0) => {
  // 0, i and len - i, 0
  let temp = inputMatrix[0 + offset][i + offset];
  let length = inputMatrix.length - 1;

  inputMatrix[0 + offset][i + offset] = inputMatrix[length - i - offset][0 + offset]
  inputMatrix[length - i - offset][0 + offset] = temp;

  return inputMatrix;
}

const thirdSwap = (inputMatrix, i, offset = 0) => {
  // len - 1, 0 and len, len - i
  let length = inputMatrix.length - 1;
  let temp = inputMatrix[length - i - offset][0 + offset];

  inputMatrix[length - i - offset][0 + offset] = inputMatrix[length - offset][length - i - offset]
  inputMatrix[length - offset][length - i - offset] = temp;

  return inputMatrix;
}


module.exports = {
  rotateMatrix,
  createNewRow,
  rotateMatrixInPlace,
  firstSwap,
  secondSwap,
  thirdSwap,
};

