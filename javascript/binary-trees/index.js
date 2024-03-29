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

  findMax(){
    if(!this.root){
      return 'Empty';
    }
    let maxValue = new Node(this.root.value);

    const traverse = (node) => {
      if (node.value > maxValue.value){
        maxValue.value = node.value;
      }
      if (node.left){
        traverse(node.left);
      }
      if (node.right){
        traverse(node.right);
      }
    };
    traverse(this.root);
    return maxValue;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  insert(data) {
    if(this.root ===null) {
      this.root = new Node(data);
    } else {
      const node = this.root;
      const _searchTree = node => {
        if(data < node.value && node.left) {
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

console.log(searchTree);
console.log(tree.findMax());
