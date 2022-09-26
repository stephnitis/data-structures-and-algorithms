'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  add(value){
    const node = new Node(value);

    if(!this.head){
      this.head = node;
      return;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }

  traverse(){
    let current = this.head;
    while(current){
      console.log(current.value);
      current = current.next;
    }
  }

}

let list = new LinkedList();
console.log(list);

list.add('a');
list.add('b');
list.add('c');
let string = JSON.stringify(list);
console.log(string);

module.exports = LinkedList;
