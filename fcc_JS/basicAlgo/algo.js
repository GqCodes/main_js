// convert celcius to fahrenheit
const convertCtoF = (celsius) => {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
};

convertCtoF(30);

// reverse a string
function reverseString(str) {
  let result = '';

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

reverseString('hello');

// Factorialize a number
function factorialize(num) {
  let result = 1;

  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
}

factorialize(5);
