'use strict';

const Stack = require('../stack-and-queue/index');

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
    while (!this.loadStack.isEmpty()) {
      this.unloadStack.push(this.loadStack.pop());
    }
    let result = this.unloadStack.pop();
    this.front = this.unloadStack.top;
    return result;
  }

  // enqueue(value) {
  //   const stack = new Stack();
  //   if (this.back) {
  //     stack.top = this.back;
  //     stack.push(value);
  //     this.back = stack.top;
  //   } else {
  //     this.back = new Node(value);
  //     this.front = this.back;
  //   }
  // }

  // dequeue() {
  //   if (!this.back) return;
  //   const stack = new Stack();
  //   const tempStack = new Stack();
  //   stack.top = this.back;
  //   while(stack.top) {
  //     tempStack.push(stack.pop());
  //   }
  //   const popped = tempStack.pop();
  //   this.front = tempStack.top;
  //   while (tempStack.top) {
  //     stack.push(tempStack.pop());
  //   }
  //   this.back = stack.top;
  //   return popped;
  // }
}

let pseudoQueue = new PseudoQueue();

pseudoQueue.enqueue(10);
pseudoQueue.enqueue(9);
pseudoQueue.enqueue(8);
pseudoQueue.enqueue(7);
pseudoQueue.enqueue(6);
pseudoQueue.enqueue(5);

pseudoQueue.dequeue();
pseudoQueue.dequeue();

console.log(pseudoQueue);

module.exports = PseudoQueue;
