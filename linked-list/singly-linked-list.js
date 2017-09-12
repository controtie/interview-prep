const LinkedList = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

LinkedList.prototype.add = function(node) {
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  };
  this.length ++;
};

LinkedList.prototype.removeTail = function() {
  if (this.length === 0) {
    return;
  } else if (this.length === 1) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  } else {
    let currentNode = this.head;
    var targetIndex = this.length - 2;
    for (var i = 0; i < targetIndex; i++) {
      currentNode = currentNode.next;
    }
    this.tail = currentNode;
    currentNode.next = undefined;
    this.length--;
  }
};

LinkedList.prototype.removeHead = function() {
  if (this.length === 0) {
    return;
  } else if (this.length === 1) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  } else {
    this.head = this.head.next;
    this.length--;
  }
};

LinkedList.prototype.removeByIndex = function(index) {
  if (typeof index !== 'number'
    || index > this.length - 1
    || index < 0
    || this.length === 0) {
    return;
  } else if (this.length === 1) {
    this.removeHead();
  } else if (index === this.length - 1) {
    this.removeTail();
  } else {
    let currentNode = this.head;
    for (var i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
    currentNode.next = currentNode.next.next;
    this.length--;
  };
};

module.exports = LinkedList;

