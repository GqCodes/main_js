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

// Use Prototype Properties to Reduce Duplicate Code
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog('Snoopy');

// iterate over all properties
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog('Snoopy');

let ownProps = [];
let prototypeProps = [];

for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

// understand constructor property
function Dog(name) {
  this.name = name;
}
// Only change code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}

// change prototype to a new object
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 2,
  eat: function () {
    console.log('nom nom nom');
  },
  describe: function () {
    console.log('My name is ' + this.name);
  },
};

// setting constructor property when changing the prototype
function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function () {
    console.log('nom nom nom');
  },
  describe: function () {
    console.log('My name is ' + this.name);
  },
};

// understand where an object's prototype comes from
function Dog(name) {
  this.name = name;
}

let beagle = new Dog('Snoopy');
Dog.prototype.isPrototypeOf(beagle);

// understand the prototype chain
function Dog(name) {
  this.name = name;
}

let beagle = new Dog('Snoopy');

Dog.prototype.isPrototypeOf(beagle); // yields true
