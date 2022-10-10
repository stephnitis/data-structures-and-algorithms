'use strict';

const LinkedList = require('./index');

// missing values in final list
// function zipLists(list1, list2) {
//   let current1 = list1.head;
//   let current2 = list2.head;

//   while(current1 && current2){
//     let next1 = current1.next;
//     let next2 = current2.next;
//     current1.next = current2;
//     if(next1 || next2) {
//       current2.next = next1;
//       current1 = next1;
//       current2 = next2;
//       current1.next = next2;

//     }
//     return list1.head ? list1 : list2;
//   }


// }

// post function call: lists individually are reversed, not zipped
function zipLists(list1, list2) {
  let zippedList = new LinkedList;

  let currentOne = list1.head;
  let currentTwo = list2.head;

  let ableToZipOne = true;
  let ableToZipTwo = true;

  while (ableToZipOne || ableToZipTwo) {
    if(!zippedList.head){
      zippedList.insert(currentOne.value);
    }

    else if (currentOne.value && ableToZipOne) {
      zippedList.append(currentOne.value);
    }

    if (currentTwo.value && ableToZipTwo) {
      zippedList.append(currentTwo.value);
    }
    // console.log('Zipped List:', JSON.stringify(zippedList));
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

// append(newValue) {
//   let current = this.head;
//   while (current.next) {
//     current = current.next;
//   }
//   let node = new Node(newValue);
//   current.next = node;
// }

// function zipLists(list1, list2) {
//   if (!list1.head && !list2.head) {
//     let zippedList = new LinkedList;
//     return zippedList;
//   } else if (list1.head && !list2.head) {
//     return list1;
//   } else if (!list1.head && list2.head) {
//     return list2;
//   }
//   let zippedList = new LinkedList;
//   let current1 = list1.head;
//   let current2 = list2.head;

//   while (current1 || current2) {
//     if (current1) {
//       zippedList.current(current1.value);
//       current1 = current1.next;
//     }
//     if (current2) {
//       zippedList.append(current2.value);
//       current2 = current2.next;
//     }

//   }
//   return zippedList.toString();
// }


console.log('---- zip lists below ----');

//define lists as instances of class

let list1 = new LinkedList();
let list2 = new LinkedList();

// let combined = new LinkedList();
//insert to lists
list1.insert(3);
list1.insert(2);
list1.insert(1);
list2.insert(10);
list2.insert(9);
list2.insert(8);

//call ziplists function with declared variables of instances

console.log(zipLists(list1, list2).toString());
console.log(list1.toString());
console.log(list2.toString());
console.log();

module.exports = { zipLists };
