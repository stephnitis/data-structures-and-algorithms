'use strict';

const LinkedList = require('../linked-list/index');

class Hash {
  constructor(size){
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key){
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);

    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  }

  set(key, value){
    let position = this.hash(key);
    let data = {[key]: value};

    if(this.buckets[position]){
      let bucket = this.buckets[position];
      bucket.add(data);
    } else {
      let bucket = new LinkedList();
      bucket.add(data);
      this.buckets[position] = bucket;
    }
  }

  get(key){
    let index = this.hash(key);

    if(this.buckets[index]){
      let bucket = this.buckets[index];

      let value = bucket.head.value[key];
      return value;
    }
  }

  has(key){
    if(this.get(key)){
      return true;
    } else {
      return false;
    }
  }

  keys(){
  //returns a collection (array) of unique hash keys.
  //   this.buckets.forEach((values, index) => {
  //     let chainedValues = values.map(
  //       ([key, value]) => `[${key}: ${value}]`
  //     );
  //     console.log(`${index}: ${chainedValues}`);
  //   });
  }
}

// map takes an array and function as argument

// function map(arr, mapFunc) {
//   const mapArr = [];
//   // empty array
//   // loop though array
//   for(let i=0;i<arr.length;i++) {
//     const result = mapFunc(arr[i], i, arr);
//     mapArr.push(result);
//   }
//   return mapArr;
// }

let hashTable = new Hash(1024);

console.log(hashTable.hash('potato'));
console.log(hashTable.hash('banana'));
console.log(hashTable.hash('starch monster'));


hashTable.set('potato', {style: 'french fried', rating: 10});
hashTable.set('potato', {style: 'chipped', rating: 7});
hashTable.set('starch monster', {name: 'Stephanie', hungry: true});
console.log(hashTable);
console.log(JSON.stringify(hashTable.buckets[849]));
console.log(JSON.stringify(hashTable.buckets[971]));

console.log('does the table have potato ----->', hashTable.has('potato'));
console.log('does the table have linguini ----->', hashTable.has('linguini'));

console.log(hashTable.keys());
