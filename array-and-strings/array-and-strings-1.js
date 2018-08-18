// 1. Check if string has all unique chars. Then, do not use data structures.
const isUnique = (string) => {
  // if is valid character validation

  const seenLetters = {};
  let isUniqueString = true;

  const letters = string.split('');
  letters.forEach(letter => {
    if (seenLetters[letter]) {
      isUniqueString = false;
    }

    seenLetters[letter] = true;
  });

  return isUniqueString;
};

const isUniqueNoDS = (string) => {
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false;
      }
    }
  }
  return true;
};

// 2. Check if one string is a permutation of another
const stringToTable = (string) => {
  const table = {};
  for (let i = 0; i < string.length; i++) {
    if (table[string[i]] === undefined) {
      table[string[i]] = 1;
    } else {
      table[string[i]] += 1;
    }
  };

  return table;
};

const isPermutation = (stringOne, stringTwo) => {
  const tableOne = stringToTable(stringOne);
  const tableTwo = stringToTable(stringTwo);
  const keysOne = Object.keys(tableOne);

  for (let i = 0; i < keysOne.length; i++) {
    const currentKey = keysOne[i];
    if (tableOne[currentKey] !== tableTwo[currentKey]) {
      return false;
    }
  }

  const keysTwo = Object.keys(tableTwo);

  for (let i = 0; i < keysTwo.length; i++) {
    const currentKey = keysTwo[i];
    if (tableOne[currentKey] !== tableTwo[currentKey]) {
      return false;
    }
  }

  return true;
};

// 3. In a matrix: if an element is '0', set all elements in its row and column to '0'
const getAllZeroes = (matrix) => {
  const allZeroes = [];
  matrix.forEach((row, rowIndex) => {
    row.forEach((value, columnIndex) => {
      if (value === 0) {
        allZeroes.push([rowIndex, columnIndex]);
      }
    });
  });
  return allZeroes;
};

const toggleRow = (matrix, rowIndex) => {
  const rowLength = matrix[rowIndex].length;
  const newRow = [];
  newRow.length = rowLength;
  newRow.fill(0);
  matrix[rowIndex] = newRow;
  return matrix;
};

const toggleColumn = (matrix, columnIndex) => {
  matrix.forEach(row => {
    row[columnIndex] = 0;
  });
  return matrix;
};

const bomberMan = (matrix) => {
  const allZeroes = getAllZeroes(matrix);
  allZeroes.forEach(coordinates => {
    toggleRow(matrix, coordinates[0]);
    toggleColumn(matrix, coordinates[1]);
  });
  return matrix;
};

module.exports = {
  isUnique,
  isUniqueNoDS,
  isPermutation,
  bomberMan,
  toggleColumn,
  toggleRow,
};

