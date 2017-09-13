const UnidirectionalGraph = function() {
  this.nodes = {};
  this.root = null;
  this.length = 0;
};

UnidirectionalGraph.prototype.add = function(node) {
  if (this.nodes[node.value] !== undefined) {
    return false;
  }
  if (this.length === 0) {
    this.root = node;
  }
  this.nodes[node.value] = node;
  this.length++;
};

UnidirectionalGraph.prototype.addEdge = function(startNodeValue, endNodeValue) {
  if (this.nodes[startNode] === undefined ||
    this.nodes[endNode] === undefined) {
    return false;
  }
  this.nodes[startNode].friends = [];
}

const Node = function(value) {
  const newNode = {};
  newNode.value = value;
  newNode.friends = [];
  return newNode;
}

module.exports = UnidirectionalGraph;

