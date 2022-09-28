'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  includes(value) {
    let result = false;

    let current = this.head;

    while (current) {
      if (current.value === value) result = true;
      current = current.next;
    }

    return result;
  }

  toString() {
    let string = '';
    let current = this.head;
    while (current) {
      string = string + `{ ${current.value} } ->`;
      current = current.next;
    }
    string = string + 'NULL';
    return string;
  }

  insertBefore(value, newValue) {
    if (!this.head) {
      throw new Error('List is Empty');
    }

    if (this.head.value === value) {
      this.insert(newValue);
      return;
    }

    let current = this.head;

    while (current) {
      if (current.next.value === value) {
        let newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }

  insertAfter(value, newValue) {
    if (!this.head) {
      throw new Error('List is Empty');
    }

    if (this.head.value === value) {
      this.insert(newValue);
      return;
    }

    let current = this.head;

    while (current) {
      if (current.value === value) {
        let newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }

  // append(value){
  //   let node = new Node(value);
  //   let current = this.head;
  //   while(current){
  //     if(current.next === null)

  //   }
  // }

}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null
    };
    this.length = 1;
    this.tail = this.head;
  }


  append(value) {
    let newNode = new Node(value);

    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
    return;
  }

  prepend(value) {
    let newNode = new Node(value);

    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    return;
  }
}

let list = new LinkedList();
let doubleList = new DoublyLinkedList();
console.log(list);

list.add('a');
list.add('b');
list.add('c');
list.insert(1);
list.insertBefore('c', 'A');
console.log(list.toString());
console.log('include result', list.includes(3));

// doubleList.prepend('x');
console.log(doubleList.append('y'));
console.log(doubleList.prepend('x'));

module.exports = LinkedList;
