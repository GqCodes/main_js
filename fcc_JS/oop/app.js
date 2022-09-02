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

// define a constructor function
function Dog() {
  this.name = 'Rupert';
  this.color = 'brown';
  this.numLegs = 4;
}

// use constructor to create a (NEW) object
function Dog() {
  this.name = 'Rupert';
  this.color = 'brown';
  this.numLegs = 4;
}

let hound = new Dog();

// extending contructors to receive arguments
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog('grumpy', 'white');

// Verify an Object's Constructor with instanceof
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(6);
myHouse instanceof House;

// understand own properties
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird('Tweety');
let ownProps = [];

for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
