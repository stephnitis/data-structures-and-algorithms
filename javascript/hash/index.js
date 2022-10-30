'use strict';

// const {LinkedList} = require ('../linked-list/index');

class Hash {
  constructor(){
    this.size = 0;
    this.values = {};
    this.length = 0;
  }

  hash(key) {
    return key.toString().length % this.size;
  }

  // The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

  set(key, value) {
    const hash = this.hash(key);
    if (!this.values.hasOwnProperty(hash)) {
      this.values[hash] = {};
    }
    if(!this.values[hash].hasOwnProperty(key)){
      this.length++;
    }
    this.values[hash][key] = value;
  }

  get(key) {
    const hash = this.hash(key);
    if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
      return this.values[hash][key];
    } else {
      return null;
    }
  }

  // hash(key){
  //   let characters = key.split('');
  //   let asciiSum = characters.reduce((sum, character) => {
  //     return sum + character.charCodeAt(0);
  //   }, 0);

  //   let initialHash = asciiSum * 599;
  //   return initialHash % this.size;
  // }

  // set(key, value){
  //   let position = this.hash(key);
  //   let data = {[key]: value};

  //   if(this.buckets[position]){
  //     let bucket = this.buckdets[position];
  //     bucket.add(data);
  //   } else {
  //     let bucket = new LinkedList();
  //     bucket.add(data);
  //     this.buckets[position] = bucket;
  //   }
  // }

  // get(key){
  //   let position = this.hash(key);

  //   if(this.buckets[position]){
  //     let bucket = this.buckets[position];

  //     let value = bucket.head.value[key];
  //     return value;
  //   }
  // }
}

let hashTable = new Hash();

hashTable.set('potato', 500);
hashTable.set('banana', 200);
hashTable.set('starch monster', 20);

console.log(hashTable);
console.log(hashTable.get('potato'));
