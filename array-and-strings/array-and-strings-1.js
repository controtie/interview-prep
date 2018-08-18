// Check if string has all unique chars. Then, do not use data structures.
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

module.exports = {
  isUnique,
  isUniqueNoDS,
  isPermutation,
};

