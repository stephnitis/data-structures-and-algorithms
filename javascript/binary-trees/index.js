'use strict';

class Node {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;

  }
}

class BinaryTree {
  constructor(){
    this.root = null;
  }

  preOrder(){
    const traverse = (node) => {
      console.log(node.value);
      if (node.left){
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
  }

  inOrder(){
    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      console.log(node.value);
      if (node.right) _traverse(node.right);
    };

    _traverse(this.root);
  }

  postOrder(){
    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);

      console.log(node.value);
    };

    _traverse(this.root);
  }
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
