// create an object
let dog = {
  name: 'pablo',
  numLegs: 3,
};

// dot notation to access properties
let dog = {
  name: 'Spot',
  numLegs: 4,
};

console.log(dog.name);
console.log(dog.numLegs);

// create a method on an object
let dog = {
  name: 'Spot',
  numLegs: 4,
  sayLegs: function () {
    return `This dog has ${this.numLegs} legs.`;
  },
};

dog.sayLegs();
