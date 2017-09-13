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

