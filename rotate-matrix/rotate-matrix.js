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
};

module.exports = {
  rotateMatrix,
  createNewRow,
  rotateMatrixInPlace,
};

