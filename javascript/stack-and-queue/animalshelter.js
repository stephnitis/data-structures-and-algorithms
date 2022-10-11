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

let sparky = new Dog('Sparky', 'dalmation');
let mittens = new Cat('Mittens', 'black');
let shelter = new AnimalShelter();

shelter.enqueue(sparky);
shelter.enqueue(mittens);
console.log(shelter);
console.log(shelter.dequeue('dog'));

module.exports = {AnimalShelter, Dog, Cat};
