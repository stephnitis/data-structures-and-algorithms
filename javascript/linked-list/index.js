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

  append(newValue) {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    let node = new Node(newValue);
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

  kthFromEnd(k){
    let offset = this.head;
    let nBehind = this.head;

    for (let i = 0; i < k; i++){
      offset = offset.next;
    }

    while(offset.next){
      offset = offset.next;
      nBehind = nBehind.next;
    }

    return nBehind.value;
  }


  zipLists(listOne, listTwo) {
    let zippedList = new LinkedList;

    let currentOne = listOne.head;
    let currentTwo = listTwo.head;

    let ableToZipOne = true;
    let ableToZipTwo = true;

    while (ableToZipOne || ableToZipTwo) {
      if(!zippedList.head){
        zippedList.insert(currentOne.value);
      }

      if (currentOne.value && ableToZipOne) {
        zippedList.append(currentOne.value);
      }

      if (currentTwo.value && ableToZipTwo) {
        zippedList.append(currentTwo.value);
      }
      console.log('Zipped List:', JSON.stringify(zippedList));
      if (currentOne.next) {
        currentOne = currentOne.next;
      } else {
        ableToZipOne = false;
      }
      if (currentTwo.next) {
        currentTwo = currentTwo.next;
      } else {
        ableToZipTwo = false;
      }
    }
    return zippedList;
  }

}

class DoublyLinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToDoubly(value) {
    this.length++;
    let newNode = new Node(value);

    if (this.tail) {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
      return newNode;
    }

    this.head = this.tail = newNode;
    return newNode;
  }

}

let list = new LinkedList();
let doubleList = new DoublyLinkedList();
console.log(list);

list.add(5);
list.add(1);
list.add(4);
list.add(3);
list.add(6);
list.add(7);
console.log('kth from end is', list.kthFromEnd(2));

list.add('a');
list.add('b');
list.add('c');
list.insert(1);
list.insertBefore('c', 'A');
console.log(list.toString());
console.log('include result', list.includes(3));

//define lists as instances of class
let listOne = new LinkedList();
let listTwo = new LinkedList();
let zippedList = new LinkedList();
//insert to lists
listOne.insert(3);
listOne.insert(2);
listOne.insert(1);
listTwo.insert(10);
listTwo.insert(9);
listTwo.insert(8);
//call ziplists function with declared variables of instances
zippedList.zipLists(listOne, listTwo);
console.log(zippedList.toString());

console.log(' -- Doubly List Below -- ');

console.log(doubleList.addToDoubly(5));
console.log(doubleList.addToDoubly(7));

module.exports = LinkedList;
