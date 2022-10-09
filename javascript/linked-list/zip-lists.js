'use strict';

const LinkedList = require('./index');

function zipLists(listOne, listTwo) {
  let current1 = listOne.head;
  let current2 = listTwo.head;

  while(current1 && current2){
    let next1 = current1.next;
    let next2 = current2.next;
    current1.next = current2;
    if(next1 || next2) {
      current2.next = next1;
      current1 = next1;
      current2 = next2;
      current1.next = next2;

    }
    return listOne.head ? listOne : listTwo;
  }


}

// post function call: lists individually are reversed, not zipped
// function zipLists(listOne, listTwo) {
//   let zippedList = new LinkedList;

//   let currentOne = listOne.head;
//   let currentTwo = listTwo.head;

//   let ableToZipOne = true;
//   let ableToZipTwo = true;

//   while (ableToZipOne || ableToZipTwo) {
//     if(!zippedList.head){
//       zippedList.insert(currentOne.value);
//     }

//     else if (currentOne.value && ableToZipOne) {
//       zippedList.append(currentOne.value);
//     }

//     if (currentTwo.value && ableToZipTwo) {
//       zippedList.append(currentTwo.value);
//     }
//     // console.log('Zipped List:', JSON.stringify(zippedList));
//     if (currentOne.next) {
//       currentOne = currentOne.next;
//     } else {
//       ableToZipOne = false;
//     }
//     if (currentTwo.next) {
//       currentTwo = currentTwo.next;
//     } else {
//       ableToZipTwo = false;
//     }
//   }
//   return zippedList;
// }

console.log('---- zip lists below ----');

//define lists as instances of class

let listOne = new LinkedList();
let listTwo = new LinkedList();

// let combined = new LinkedList();
//insert to lists
listOne.insert(3);
listOne.insert(2);
listOne.insert(1);
listTwo.insert(10);
listTwo.insert(9);
listTwo.insert(8);

//call ziplists function with declared variables of instances

console.log(zipLists(listOne, listTwo).toString());
console.log(listOne.toString());
console.log(listTwo.toString());

module.exports = {zipLists};
