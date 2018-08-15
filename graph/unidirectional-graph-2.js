// this unidirectional graph will only store unique integers
class UnidirectionalGraph {
  constructor() {
    this.root = null;
    this.nodes = [];
    this.length = 0;
  }

  add(integer) {
    if (this.nodes[integer]) {
      return;
    }
    const newNode = new Node(integer);

    if (this.root === null) {
      this.root = newNode;
    }

    this.nodes[integer] = newNode;

    this.length += 1;
  }

  addEdge(firstNodeValue, secondNodeValue) {
    const firstNode = this.nodes[firstNodeValue];
    const secondNode = this.nodes[secondNodeValue];
    if (firstNode === undefined || secondNode === undefined ) {
      return false;
    }

    firstNode.addFriend(secondNode);
    return true;
  }

  remove(integer) {
    if (this.nodes[integer] === undefined) {
      return;
    }

    this.nodes[integer] = undefined;
    this.nodes.forEach((node) => {
      if (!node || !node.friends) {
        return;
      }
      node.friends = node.friends.filter(friend => friend.value !== integer);
    });

    this.length -= 1;
  }

  isTraversable(startValue, endValue) {
    const currentNode = this.nodes[startValue];

    if (currentNode.value === endValue) {
      return true;
    }

    let isFound = false;
    currentNode.friends.forEach(friend => {
      const found = this.isTraversable(friend.value, endValue);
      if (found) {
        isFound = true;
      }
    });

    return isFound;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.friends = [];
  }

  addFriend(node) {
    this.friends.push(node);
  }
}

module.exports = UnidirectionalGraph;
