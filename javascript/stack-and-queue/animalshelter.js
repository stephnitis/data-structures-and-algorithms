'use strict';

const {Queue} = require('../stack-and-queue/index');

class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
}

class Cat {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}

class AnimalShelter {
  constructor() {
    this.dogQueue = new Queue();
    this.catQueue = new Queue();
  }

  enqueue(animal){
    if (animal instanceof Dog) {
      this.dogQueue.enqueue(animal);
    }
    if (animal instanceof Cat){
      this.catQueue.enqueue(animal);
    }
  }

  dequeue(preference) {
    if (preference === 'dog') {
      return this.dogQueue.dequeue();
    }
    else if (preference === 'cat') {
      return this.catQueue.dequeue();
    } else return null;
  }
}

module.exports = {AnimalShelter, Dog, Cat};
