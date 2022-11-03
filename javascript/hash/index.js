'use strict';

const LinkedList = require('../linked-list/index');

class Hash {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);

    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  }

  set(key, value) {
    let position = this.hash(key);
    let data = { [key]: value };

    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      bucket.add(data);
    } else {
      let bucket = new LinkedList();
      bucket.add(data);
      this.buckets[position] = bucket;
    }
  }

  get(key) {
    let index = this.hash(key);

    if (this.buckets[index]) {
      let bucket = this.buckets[index];
      console.log('bucket ---->', bucket);
      let current = bucket.head;
      while (current) {
        console.log(current.value);
        // if (key === current.keys()[0]) {
        //   return current.value[key];
        // }
        current = current.next;
      }

      let value = bucket.head.value[key];
      return value;
    }
  }

  has(key) {
    if (this.get(key)) {
      return true;
    } else {
      return false;
    }
  }

  keys() {
    let keysArray = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        let bucket = this.buckets[i];
        let current = bucket.head;
        while (current) {
          console.log(Object.keys(current.value)[0]);
          keysArray.push(Object.keys(current.value)[0]);
          current = current.next;
        }
      }
    }
    return keysArray;
  }

}


let hashTable = new Hash(1024);

// console.log(hashTable.hash('potato'));
// console.log(hashTable.hash('banana'));
// console.log(hashTable.hash('starch monster'));

hashTable.set('potato', { style: 'french fried', rating: 10 });
hashTable.set('potato', { style: 'chipped', rating: 7 });
hashTable.set('starch monster', { name: 'Stephanie', hungry: true });
hashTable.set('papaya', 'fruit');
hashTable.set('Kali', 'pup');
// console.log(hashTable);
// console.log(JSON.stringify(hashTable.buckets[849]));
// console.log(JSON.stringify(hashTable.buckets[971]));

hashTable.get('potato');

// console.log('does the table have potato ----->', hashTable.has('potato'));
// console.log('does the table have linguini ----->', hashTable.has('linguini'));

console.log(hashTable.keys());
