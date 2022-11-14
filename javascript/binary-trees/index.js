'use strict';

class Node {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    const traverse = (node) => {
      console.log(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
  }

  inOrder() {
    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      console.log(node.value);
      if (node.right) _traverse(node.right);
    };

    _traverse(this.root);
  }

  postOrder() {
    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);

      console.log(node.value);
    };

    _traverse(this.root);
  }

  findMax() {
    if (!this.root) {
      return 'Empty';
    }
    let maxValue = new Node(this.root.value);

    const traverse = (node) => {
      if (node.value > maxValue.value) {
        maxValue.value = node.value;
      }
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return maxValue;
  }
}

// In the case of binary search trees (BST), Inorder traversal gives nodes in non-decreasing order. To get nodes of BST in non-increasing order, a variation of Inorder traversal where Inorder traversal is reversed can be used.

// A recursive algorithm is the easiest way to get started with binary tree inorder traversal. The idea is as follows:

// If the node is null, do nothing – else, recursively call the function on the node's left child.
// Then, do some operation on the node after traversing though all left children. Our current node is guaranteed to be the leftest node.
// Finally, call the function on node.right.

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    if (this.root === null) {
      this.root = new Node(data);
    } else {
      const node = this.root;
      const _searchTree = node => {
        if (data < node.value && node.left) {
          _searchTree(node.left);
        } else if (data < node.value) {
          node.left = new Node(data);
        } else if (data > node.value && node.right) {
          _searchTree(node.right);
        } else if (data > node.value) {
          node.right = new Node(data);
        }
      };
      return _searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.value;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.value;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(value) {
    const removeNode = function (node, value) {
      if (node === null) {
        return null;
      }
      if (value === node.value) {
        if (node.left === null && node.right === null) {
          return null;
        }
        if (node.left === null) {
          return node.left;
        }

        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.value = tempNode.value;
        node.right = removeNode(node.right, tempNode.value);
        return node;
      } else if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else {
        node.right = removeNode(node.left, value);
        return node;
      }
    };
    this.root = removeNode(this.root, value);
  }

  isBalanced() {
    return (this.findMinHeight() >= this.findMaxHeight() - 1);
  }

  findMinHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  findMaxHeight(node = this.root) {
    if (node === null) {
      return - 1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  // binaryTraverse(current) {
  //   const _traverse = (node) => {
  //     if (node.value <= current.value) {
  //       if (current.left) _traverse(current.left);
  //       else current.left = node;
  //     }
  //     else if (node.value > current.value) {
  //       if (current.right) _traverse(current.right);
  //       else current.right = node;
  //     }
  //   };
  //   _traverse(this.root);
  // }

  levelOrder() {
    let result = [];
    let queue = [];
    if (this.root !== null) {
      queue.push(this.root);
      while (queue.length > 0) {
        let node = queue.shift();
        result.push(node.value);
        if (node.left !== null) {
          queue.push(node.left);
        }
        if (node.right !== null) {
          queue.push(node.right);
        }
      }
      return result;
    } else {
      return null;
    }
  }
}

function sumOfOdds(binarySearchTree) {
  let sum = 0;
  const _traverse = (node) => {
    if (node.value % 2 !== 0) {
      sum += node.value;
    }
    if (node.left) _traverse(node.left);
    if (node.right) _traverse(node.right);
  };
  _traverse(binarySearchTree.root);
  return sum;
}


let tree = new BinaryTree();

tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(8);

console.log('--preOrder--');
tree.preOrder();
console.log('--inOrder--');
tree.inOrder();
console.log('--postOrder--');
tree.postOrder();

let searchTree = new BinarySearchTree();

searchTree.insert(100);
searchTree.insert(200);
searchTree.insert(75);
searchTree.insert(50);
searchTree.insert(25);

console.log('searchTree ---->', searchTree);
// console.log(tree.findMax());
console.log('sumOfOdds ---->', sumOfOdds(searchTree));

