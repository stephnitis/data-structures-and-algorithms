const LinkedList = require('../index');

//Number is represented in linked list such that each digit corresponds to a node in linked list. Add 1 to it. For example 1999 is represented as (1-> 9-> 9 -> 9) and adding 1 to it should change it to (2->0->0->0)

// 1. Reverse given linked list. For example, 1-> 9-> 9 -> 9 is converted to 9-> 9 -> 9 ->1.
// 2. Start traversing linked list from leftmost node and add 1 to it. If there is a carry, move to the next node. Keep moving to the next node while there is a carry.
// 3. Reverse modified linked list and return head.

function addOneUtil(head){
  let resultant = head;
  let temp = null;
  let carry = 1, sum;

  while(head !== null){
    sum = carry + head.value;
    carry = (sum >= 10) ? 1 : 0;
    sum = sum % 10;
    head.value = sum;
    temp = head;
    head = head.next;
  }
  if(carry > 0){
    temp.next = new Node(carry);
  }
  return resultant;
}

const reverse = (list) => {
  let previous = null;
  let current = list.head;

  while(current){
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
};

function addOne(head){
  head = reverse(head);
  head = addOneUtil(head);

  return reverse(head);
}

let list = new LinkedList();

list.add(1);
list.add(9);
list.add(9);
list.add(9);

addOne(list);

console.log(list.toString());


