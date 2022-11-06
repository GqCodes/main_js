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
