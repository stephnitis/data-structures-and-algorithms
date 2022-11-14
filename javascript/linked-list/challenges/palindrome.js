const LinkedList = require('../index');

// take the first half of word and compare to the second half for most efficiency
// find the middle of the linked list first
// needs to return a boolean

// 1. Get the middle of the linked list
// 2. Reverse the second half of the linked list
// 3. Check if the first half and second half are identical
// 4. Construct the original linked list by reversing the second half again and attaching it back to the first half

//how do I account for the middle node?

const stringToList = (string) => {
  let stringList = new LinkedList();
  for (let i = 0; i < string.length; i++ ){
    stringList.add(string[i]);
  }
  return stringList;
};

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

const isPalindrome = (list) => {
  if(list.head === null){
    return true;
  }

  let secondHalf = list.head;
  let firstHalf = list.head;
  while (secondHalf.next.next) {
    secondHalf = secondHalf.next.next;
    firstHalf = firstHalf.next;
  }
  //reverse second half
  reverse(secondHalf);

  while(firstHalf !== null && secondHalf !== null){
    if(firstHalf !== secondHalf){
      return false;
    } else if(firstHalf === secondHalf) {
      return true;
    }
  }
};

let stringList = stringToList('racecar');
console.log(stringList.toString());
let stringList2 = stringToList('jackfruit');
console.log(stringList2.toString());

let list = new LinkedList();

// list.add('p');
// list.add('o');
// list.add('t');
// list.add('a');
// list.add('t');
// list.add('o');

list.add('r');
list.add('a');
list.add('c');
list.add('e');
list.add('c');
list.add('a');
list.add('r');

// reverse(list);
// console.log('reverse ----->', list.toString());

console.log(isPalindrome(list));
