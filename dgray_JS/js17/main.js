// Objects
// key-value pairs in curly braces
const myObj = { name: "chris" };
console.log(myObj);
console.log(myObj.name);

const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["eat", "sleep", "code"],
  beverage: {
    morning: "coffee",
    afternoon: "iced tea",
  },
  //   method(function) within an object
  action: function () {
    return `Time for ${this.beverage.morning}!`;
  },
};

console.log(anotherObj);
console.log(anotherObj.beverage.morning);
console.log(anotherObj.action());

// inheritance using Object.create()
const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vrooooom!";
  },
};

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
  return "Whooosh!";
};
console.log(car.engine());

const tesla = Object.create(car);
tesla.engine = function () {
  return "Shhhh...";
};
console.log(tesla.wheels);
console.log(tesla.engine());

// Band
const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "John Bonham",
};

delete band.drums;
console.log(band.hasOwnProperty("drums"));

console.log(Object.keys(band));
console.log(Object.values(band));

// FOR IN LOOP
for (let job in band) {
  console.log(band[job]);
  console.log(`On ${job}, it's ${band[job]}! `);
}

// Destructuring objects
const { guitar: myVariable, bass: myBass } = band;

console.log(myVariable);
console.log(myBass);

const { guitar, vocals } = band;
console.log(vocals);

function sings({ vocals }) {
  return `${vocals} sings!`;
}
console.log(sings(band));
