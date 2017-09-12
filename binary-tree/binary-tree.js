// An unbalanced Binary Tree
// All nodes must be in format:
// {value: (Number), left: (Object, null), right: (Object, null)};
const BinaryTree = () => {
  const binaryTree = Object.create(TreeMethods);
  binaryTree.root = null;
  return binaryTree;
};

TreeMethods = {};

TreeMethods.add = function(node) {
  if (this.root === null) {
    this.root = node;
    return;
  }
  const targetValue = node.value;
  const addNode = function(currentNode) {
    if (targetValue === currentNode.value) {
      return null;
    } else if (targetValue > currentNode.value) {
      if (currentNode.right === null || currentNode.right === undefined) {
        currentNode.right = node;
        return true;
      }
      addNode(currentNode.right);
    } else if (targetValue < currentNode.value) {
      if (currentNode.left === null || currentNode.left === undefined) {
        currentNode.left = node;
        return true;
      }
      addNode(currentNode.left);
    }
  }
  return addNode(this.root);
};

TreeMethods.find = function(value) {
  if (this.root === null) {
    return false;
  }
  const findNode = (currentNode) => {
    if (currentNode.value === value) {
      return currentNode;
    } else {
      if (value > currentNode.value) {
        if (currentNode.right === null) {
          return false;
        }
        return findNode(currentNode.right);
      } else if (value < currentNode.value) {
        if (currentNode.left === null) {
          return false;
        }
        return findNode(currentNode.left);
      }
    }
  };

  return findNode(this.root);
};

TreeMethods.remove = function(value) {
  if (this.root === null) {
    return;
  }
  if (this.root.value === value) {
    this.root = null;
    return this.root;
  }
  const removeNodeOnValue = (node) => {
    if (node === null ) {
      return false;
    }
    if (node.right.value === value) {
      let removedNode = node.right;
      node.right = null;
      return removedNode;
    }
    if (node.left.value === value) {
      let removedNode = node.left;
      node.left = null;
      return removedNode;
    }
    if (value > node.value) {
      return removeNodeOnValue(node.right);
    }
    if (value < node.value) {
      return removeNodeOnValue(node.left);
    }
  };
  const removedNode = removeNodeOnValue(this.root);

  if (removedNode.left !== null) {
    this.add(removedNode.left);
  }
  if (removedNode.right !== null) {
    this.add(removedNode.right);
  }

  return removedNode;
};

module.exports = BinaryTree;

