'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
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

  peek() {
    if (this.top) {
      return this.top.value;
    }
  }

  isEmpty() {
    return this.top === null;
  }

}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.front) {
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    this.back = newNode;
  }

  dequeue() {

    let temp = this.front;
    if (this.front) {
      this.next = this.front;
      temp.next = null;
    }
    return temp.value;
  }

  peek() {
    if (this.front) {
      return this.front.value;
    }
  }

  isEmpty() {
    return this.front === null;
  }

}

class PseudoQueue {
  constructor() {
    this.top = null;
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
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.peek());
console.log(stack.pop());

let queue = new Queue();

queue.enqueue(8);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);

console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.isEmpty());

let pseudoQueue = new PseudoQueue();

pseudoQueue.push(10);

console.log(pseudoQueue.toString());
