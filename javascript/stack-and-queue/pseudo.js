'use strict';

const {Stack} = require('./index');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class PseudoQueue {
  constructor() {
    this.loadStack = new Stack;
    this.unloadStack = new Stack;
    this.front = null;
    this.back = null;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {

    let temp = this.top;

    if (this.top) {
      this.next = this.top;
      temp.next = null;
    }
    return temp.value;
  }

  enqueue(value) {
    while (!this.unloadStack.isEmpty()) {
      this.loadStack.push(this.unloadStack.pop());
    }
    this.loadStack.push(value);
    this.back = this.loadStack.top;
  }

  dequeue() {
    while (this.unloadStack.isEmpty()) {
      let value = this.loadStack.pop();
      this.unloadStack.push(value);
    }
    let result = this.unloadStack.peek();
    this.front = this.unloadStack.top;
    return result;
  }
}

let pseudoQueue = new PseudoQueue();

pseudoQueue.enqueue(10);
pseudoQueue.enqueue(9);
pseudoQueue.enqueue(8);
pseudoQueue.enqueue(7);
pseudoQueue.enqueue(6);
pseudoQueue.enqueue(5);

console.log('load stack', pseudoQueue.loadStack);

pseudoQueue.dequeue();
pseudoQueue.dequeue();

console.log('unload stack', pseudoQueue.unloadStack);

module.exports = PseudoQueue;
