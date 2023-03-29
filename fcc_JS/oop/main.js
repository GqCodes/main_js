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
