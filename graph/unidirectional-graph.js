const UnidirectionalGraph = function() {
  this.nodes = {};
  this.root = null;
  this.length = 0;
};

UnidirectionalGraph.prototype.add = function(value) {
  const newNode = Node(value);
  if (this.nodes[value] !== undefined) {
    return false;
  }
  if (this.length === 0) {
    this.root = newNode;
  }
  this.nodes[value] = newNode;
  this.length++;
};

UnidirectionalGraph.prototype.remove = function(value) {
  if (this.nodes[value] === undefined) {
    return false;
  }
  this.nodes[value] = undefined;
  const valueKeys = Object.keys(this.nodes);
  valueKeys.map((key) => this.nodes[key])
  .filter((node) => node !== undefined)
  .map((node) => {
    node.friends.map((friend, i) => {
      if (friend.value === value) {
        delete node.friends[i];
      }
    });
  });
  return true;
};

UnidirectionalGraph.prototype.addEdge = function(startNodeValue, endNodeValue) {
  const startNode = this.nodes[startNodeValue];
  const endNode = this.nodes[endNodeValue];
  if (startNode === undefined ||
    endNode === undefined) {
    return false;
  }
  startNode.friends.push(endNode);
}

UnidirectionalGraph.prototype.isTraversable = function(startNodeValue, endNodeValue) {
  const startNode = this.nodes[startNodeValue];
  const endNode = this.nodes[endNodeValue];
  if (startNode === undefined ||
    endNode === undefined) {
    return false;
  }

  const findNode = (currentNode) => {
    return currentNode.friends.filter((friendNode) => {
      if (friendNode.value === endNodeValue) {
        return true;
      } else {
        return findNode(friendNode);
      }
    })
  };
  return findNode(startNode).length > 0;
}

const Node = function(value) {
  const newNode = {};
  newNode.value = value;
  newNode.friends = [];
  return newNode;
}

module.exports = UnidirectionalGraph;

