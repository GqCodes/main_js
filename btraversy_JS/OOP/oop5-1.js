// person constructor

function Person(name, dob) {
  this.name = name;
  //   this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = () => {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

// const chris = new Person("chris");
// const john = new Person("john");

const chris = new Person("chris", "oct 5 1986");
console.log(chris.calculateAge());
