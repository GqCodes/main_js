// sub classes
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCosts() {
    return 500;
  }
}

const john = new Customer("john", "doe", "555-555-5555", "standard");

console.log(john.greeting());

console.log(Customer.getMembershipCosts());
