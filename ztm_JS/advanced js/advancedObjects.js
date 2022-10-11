/*  REFERENCE TYPE */
// object 1 AND 2 would go into the same "box" but object 3 goes into it's own box because it has a new set of curlies.
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

/*  CONTEXT */
// the keyword "this" just refers to what object we are inside of

/* INSTANTIATION */
// when you make a copy of an object and reuse the code.
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}. I'm a ${this.type}`);
  }
}
class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`Weeeee I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");

console.log(wizard1.introduce());
