const Trie = function() {
  this.root = {};
}

const Node = function(letter) {
  return { letter };  //store the next letter in a trie as this.a or this.o
};

Trie.prototype.insert = function(word) {
  let split = word.split('');
  const insertWord = (currentNode, lettersLeft) => {
    let nextLetter = lettersLeft[0];
    if (!nextLetter) {
      return;
    }
    if (currentNode[nextLetter]) {
      return insertWord(currentNode[nextLetter], lettersLeft.slice(1));
    }
    let newLetterNode = Node(nextLetter);
    currentNode[nextLetter] = newLetterNode;
    return insertWord(newLetterNode, lettersLeft.slice(1));
  };
  return insertWord(this.root, split);
};

Trie.prototype.retrieve = function(word) {
  let split = word.split('');
  const retrieveLetter = (currentNode, lettersLeft) => {
    let nextLetter = lettersLeft[0];
    if (!nextLetter) {
      return true;
    }
    if (currentNode[nextLetter]) {
      return retrieveLetter(currentNode[nextLetter], lettersLeft.slice(1));
    }
    return false;
  };
  return retrieveLetter(this.root, split);
}

Trie.prototype.getRemainingOptions = function(prefix) {
  let split = prefix.split('');
  let lettersSoFar = [];
  const matchPrefix = (currentNode, lettersLeft) => {
    let nextLetter = lettersLeft[0];
    if (!nextLetter) {
      return currentNode;
    }
    if (currentNode[nextLetter]) {
      lettersSoFar.push(nextLetter);
      return matchPrefix(currentNode[nextLetter], lettersLeft.slice(1));
    }
    return false;
  };
  const lastNode = matchPrefix(this.root, split);

  const remainingLetters = [];
  const getRemainingOptions = (node, letterList) => {
    let keys = Object.keys(node).filter(val => val !== 'letter');
    if (keys.length === 0) {
      return remainingLetters.push(letterList);
    }
    keys.forEach(letter => {
      getRemainingOptions(node[letter], letterList.concat(letter));
    });
  };
  getRemainingOptions(lastNode, []);

  return remainingLetters.map(lastLetters => {
    return lettersSoFar.join('').concat(lastLetters.join(''));
  })
}

module.exports = Trie;

