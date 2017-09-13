const LRUCache = function(limit) {
  const cache = Object.create(LRUCacheMethods);
  cache.storage = {};
  cache.limit = limit;
  cache.list = LinkedList(limit);
  return cache;
};

const LRUCacheMethods = {};

LRUCacheMethods.addToStorage = function(key, value) {
  if (key && value) {
    this.storage[key] = value;
    return true;
  }
  return false;
};

LRUCacheMethods.removeFromStorage = function(key) {
  if (key === null || key === undefined) {
    return false;
  }
  if (this.storage[key] === undefined) {
    return false;
  }
  delete this.storage[key];
  return true;
};

LRUCacheMethods.add = function(key, value) {
  this.addToStorage(key, value);
  const removedNode = this.list.LRUAdd(key);
  if (removedNode) {
    this.removeFromStorage(removedNode.value);
  }
};

const LinkedList = function(limit) {
  const list = Object.create(LinkedListMethods);
  list.length = 0;
  list.limit = limit;
  list.head = null;
  list.tail = null;
  return list;
};

const LinkedListMethods = {};

LinkedListMethods.add = function(value) {
  const newEntry = Node(value);
  let removedEntry;
  if (this.head === null) {
    this.head = newEntry;
    this.tail = newEntry;
  } else {
    if (this.length === this.limit) {
      removedEntry = this.removeTail();
    }
    newEntry.next = this.head;
    this.head.prev = newEntry;
    this.head = newEntry;
  }
  this.length++;
  return removedEntry;
};

LinkedListMethods.remove = function(value) {
  const findRemovalNode = (currentNode) => {
    if (currentNode.value === value) {
      return currentNode;
    } else if (currentNode.next !== null) {
      return findRemovalNode(currentNode.next);
    } else {
      return null;
    }
  };

  const removalNode = findRemovalNode(this.head);
  if (removalNode === null) {
    return false;
  }

  const nextNode = removalNode.next;
  const prevNode = removalNode.prev;
  if (nextNode !== null) {
    nextNode.prev = prevNode;
  }
  if (prevNode !== null) {
    prevNode.next = nextNode;
  }
  this.length--;
  return removalNode;
};

LinkedListMethods.removeTail = function() {
  if (this.length === 0) {
    return null;
  } else if (this.length === 1) {
    let node = this.tail;
    this.head = null;
    this.tail = null;
    this.length--;
    return node;
  } else {
    let node = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;
    return node;
  }
};

LinkedListMethods.LRUAdd = function(value) {
  this.remove(value);
  return this.add(value);
}

const Node = (value) => {
  return {value, next: null, prev: null};
};


module.exports = {
  LRUCache,
  LinkedList,
};

