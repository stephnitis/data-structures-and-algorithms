'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class RecursiveList {
  constructor(){
    this.head = null;
  }

  append(value){
    if(this.head === null){
      this.head = new Node(value);
      //without return we duplicate the first node with our recursive function
      return;
    }

    this._append(value, this.head);
  }
  //only for implementing append recursively
  _append(value, current){
    //base case for adding a new node happens at the end of the linked list
    if(current.next === null){
      current.next = new Node(value);
      return;
    }

    this._append(value, current.next);
  }

  // separating the recursive function so that when we run the function we don't have to pass in the head

  print(){
    const output = this._print(this.head);
    console.log(output);
  }

  _print(current){
    if(current === null) return '';
    return current.value + '-->' + this._print(current.next);
  }

  contains(target){
    return this._contains(target, this.head);
  }

  _contains(target, current){
    if(current === null) return false;
    if(current.value === target) return true;
    return this._contains(target, current.next);
  }

}

const recursive = new RecursiveList();

recursive.append('a');
recursive.append('b');
recursive.append('c');

// recursive.print();

const newList = new RecursiveList();

newList.append(11);
newList.append(7);
newList.append(10);
newList.append(2);

newList.print();

//iterative:

// const sumList = (head) => {
//   let sum = 0;
//   let current = head;
//   while(current){
//     sum += current.value;
//     current = current.next;
//   }
//   return sum;
// };

//recursive:

const sumList = (head) => {
  if(head === null) return 0;
  return head.value + sumList(head.next);
};

console.log(sumList(newList.head)); //should return 30
