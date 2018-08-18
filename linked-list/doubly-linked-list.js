class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNode(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  addToHead(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  findValue(value) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return false;
  }

  removeNodes(value) {
    let currentNode = this.findValue(value);

    while (currentNode !== false) {

      if (currentNode.prev === null && currentNode.next === null) {
        this.head = null;
        this.prev = null;
        return;
      }

      if (currentNode.prev === null) {
        this.head = currentNode.next;
        this.head.prev = null;
      }

      if (currentNode.next === null) {
        this.tail= currentNode.prev;
        this.tail.next = null;
      }

      if (currentNode.prev && currentNode.next) {
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
      }

      currentNode = this.findValue(value);
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

module.exports = {
  DoublyLinkedList,
  Node,
};

