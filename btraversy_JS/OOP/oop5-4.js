// Person Constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = () => `Hello there ${this.firstName} ${this.lastName}`;

const person1 = new Person("John", "Doe");

console.log(person1.greeting()); // Hello there John Doe

// Customer Constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer("Tom", "Smith", "555-555-5555", "Standard");

console.log(customer1);

// Customer Greeting
Customer.prototype.greeting = () => `Hello there ${this.firstName} ${this.lastName} welcome to our company`;

console.log(customer1.greeting());
