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

module.exports = {
  isUnique,
  isUniqueNoDS,
};

