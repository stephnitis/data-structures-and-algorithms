const LinkedList = require('../index');
const Node = require('../index');

//Number is represented in linked list such that each digit corresponds to a node in linked list. Add 1 to it. For example 1999 is represented as (1-> 9-> 9 -> 9) and adding 1 to it should change it to (2->0->0->0)

// 1. Reverse given linked list. For example, 1-> 9-> 9 -> 9 is converted to 9-> 9 -> 9 ->1.
// 2. Start traversing linked list from leftmost node and add 1 to it. If there is a carry, move to the next node. Keep moving to the next node while there is a carry.
// 3. Reverse modified linked list and return head.

// function addOneUtil(head){
//   let resultant = head;
//   let temp = null;
//   let carry = 1, sum;

//   while(head !== null){
//     sum = carry + head.value;
//     console.log('sum ----->', sum);
//     console.log('carry ----->', carry);
//     carry = (sum >= 10) ? 1 : 0;
//     sum = sum % 10;
//     head.value = sum;
//     temp = head;
//     console.log('temp ----->', temp);
//     head = head.next;
//   }
//   if(carry > 0){
//     temp.next = new Node(carry);
//   }
//   return resultant;
// }

function addOne(list) {
  reverse(list);
  let current = list.head;

  while (current) {
    let carry = 1;
    let sum = current.value + carry;
    console.log('current ----->', current);
    console.log('sum ----->', sum);
    if (current.next === null && carry === 1) {
      current.next = new Node(carry);
    }
    if (sum >= 10) {
      carry = 1;
      sum = sum % 10;
      current.value = sum;
    } else {
      carry = 0;
      current.value = sum;
    }
    current = current.next;
  }
  return reverse(list);
}

const reverse = (list) => {
  let previous = null;
  let current = list.head;

  while (current) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
};

// function addOne(list) {
//   list = reverse(list);
//   list = addOneUtil(list);

//   return reverse(list);
// }

let list = new LinkedList();

list.add(9);
list.add(9);
list.add(9);
list.add(9);

console.log(list.toString());
addOne(list);

console.log(list.toString());


