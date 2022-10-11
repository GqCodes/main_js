// ...TESTING.. //
//writing a unit test with node and npm
// Task 1: Code the timesTwo function declaration
function timesTwo(num) {
  return num * 2;
}
// Task 2: Export the timesTwo function as a module
module.exports = timesTwo;

// TEST
const timesTwo = require("./timesTwo");

// Write the first test
test("returns the number times 2", () => {
  expect(timesTwo(2)).toBe(4);
});
