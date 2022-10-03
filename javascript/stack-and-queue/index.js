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
    if(this.top){
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
    // if front maybe use a temp variable
    // mindful of the new front and the back
    // if queue is left empty, is back null?

    // INPUT <-- none
    // OUTPUT <-- value of the removed Node
    // EXCEPTION if queue is empty

    //  Node temp <-- front
    //  front <-- front.next
    //  temp.next <-- null

    //  return temp.value
  }

  peek() {
    // INPUT <-- none
    // OUTPUT <-- value of the front Node in Queue
    // EXCEPTION if Queue is empty

    // return front.value
  }

  isEmpty() {
    //return Boolean
    // INPUT <-- none
    // OUTPUT <-- boolean

    // return front = NULL
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

queue.enqueue(5);
