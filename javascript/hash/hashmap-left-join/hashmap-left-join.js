// const LinkedList = require('../../linked-list/index');
const Hash = require('../index');

// Declare a function called left join that takes in two hash maps as parameters
// Define a variable that instantiates a new Hash Map
// For the length of the buckets, iterate over the values
// If there is an index with a bucket where the key from hashOne is equal to the key of hashTwo
// Append the value to the bucket of the matching key

//else return null for nonexistent values

// function leftJoin(hashOne, hashTwo){
//   let jointArray = [];

//   for (let i = 0; i < buckets.length; i++) {
//     if(hashOne.buckets[i] && hashTwo.buckets[i]) {
//       let bucketOne = hashOne.buckets[i];
//       let bucketTwo = hashOne.buckets[i];
//       let currentOne = hashOne.bucket.head;
//       let currentTwo = hashTwo.bucket.head;
//       while(currentOne && currentTwo) {
//         console.log(Object.keys(currentOne.value)[0]);
//         if (currentOne.value === currentTwo.value){
//           jointArray.push()
//         }
//       }

//     }
//   }
// }


let hashOne = new Hash(1024);
let hashTwo = new Hash(1024);

hashOne.set('diligent', 'employed');
hashOne.set('fond', 'enamored');
hashOne.set('guide', 'usher');
hashOne.set('outfit', 'garb');
hashOne.set('wrath', 'anger');

hashTwo.set('diligent', 'idle');
hashTwo.set('fond', 'averse');
hashTwo.set('guide', 'follow');
hashTwo.set('flow', '	jam');
hashTwo.set('wrath', 'delight');

// leftJoin(hashOne, hashTwo);
