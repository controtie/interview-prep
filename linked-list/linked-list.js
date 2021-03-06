const LinkedList = require('./singly-linked-list');

// 1. Remove the k-th to last element in a singly linked list

const getKthElement = (list, k) => {
  let currentNode = list.head;
  let kCounter = 1;
  let kthElement = currentNode;

  while (currentNode.next !== undefined) {
    if (kCounter < k) {
      kCounter += 1;
    } else {
      kthElement = kthElement.next;
    }

    currentNode = currentNode.next;
  }

  if (kCounter < k) {
    // there is no k-th element. List is too small
    return null;
  }

  return kthElement;
};

// 2. Given to singly linked lists, determine if they intersect
// Intersection is defined as sharing a same node by reference
// If they intersect, return the intersecting node

const getListLength = (list) => {
  let counter = 0;
  let currentNode = list.head;

  while (currentNode !== undefined) {
    counter++;
    currentNode = currentNode.next;
  }

  return counter;
};

const sharesIntersection = (firstList, secondList) => {
  // check if the two lists share the same tail node.
  // If they have any shared intersection, they must terminate on the same shared node
  if (firstList.tail === secondList.tail) {
    return true;
  }

  // traverse list to check tail nodes in case tail pointer is broken
  let firstTail;
  let secondTail;
  let firstNode = firstList.head;
  let secondNode = secondList.head;

  while (firstNode.next !== undefined) {
    firstNode = firstNode.next;
  }

  while (secondNode.next !== undefined) {
    secondNode = secondNode.next;
  }

  if (firstNode !== secondNode) {
    return false;
  }

  // LinkedList.length is unreliable, since length property is only controlled by 'add' method
  const firstListLength = getListLength(firstList);
  const secondListLength = getListLength(secondList);

  if (firstListLength > secondListLength) {
    return getKthElement(firstList, secondListLength);
  }

  return getKthElement(secondList, firstListLength);
};


module.exports = {
  getKthElement,
  sharesIntersection,
};
