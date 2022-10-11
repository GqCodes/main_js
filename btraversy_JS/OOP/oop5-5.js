const personPrototypes = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  },
};

const mary = Object.create(personPrototypes);
mary.firstName = "Mary";
mary.lastName = "Williams";
mary.age = 30;

console.log(mary);

mary.getsMarried("Thompson");

console.log(mary.greeting());

const Chris = Object.create(personPrototypes, {
  firstName: { value: "Chris" },
  lastName: { value: "Vargas" },
  age: { value: 36 },
});

console.log(Chris);

console.log(Chris.greeting());
