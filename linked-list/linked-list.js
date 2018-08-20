const LinkedList = require('./singly-linked-list');

// 1. Remove the k-th to last element in a singly linked list

const getKthElement = (list, k) => {
  let currentNode = list.head;
  let kCounter = 1;
  let kthElement = currentNode;

  while (currentNode !== undefined) {
    if (currentNode.next === undefined) {
      if (kCounter < k) {
        // there is no k-th element. List is too small
        return null;
      } else {
        return kthElement;
      }
    }

    if (kCounter < k) {
      kCounter += 1;
    } else {
      kthElement = kthElement.next;
    }

    currentNode = currentNode.next;
  }

  return null;
};

module.exports = {
  getKthElement,
};
