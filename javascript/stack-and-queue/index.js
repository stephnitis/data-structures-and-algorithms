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
    // remove the node
    // what does this return and what happens to top? reassigned? What about if stack is empty

    // INPUT <-- No input
    // OUTPUT <-- value of top Node in stack
    // EXCEPTION if stack is empty

    //   Node temp <-- top
    //  top <-- top.next
    //  temp.next <-- null
    //  return temp.value
  }

  peek() {
    // INPUT <-- none
    // OUTPUT <-- value of top Node in stack
    // EXCEPTION if stack is empty

    // return top.value
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

let queue = new Queue();

queue.enqueue(5);
