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

// find longest word in string
function findLongestWordLength(str) {
  let longestWord = '';
  let words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    let individualWord = words[i];
    if (individualWord.length > longestWord.length) {
      longestWord = individualWord;
    }
  }
  return longestWord.length;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');

// return largest number in array
function largestOfFour(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let individualArray = arr[i];
    let individualHighestValue = -Infinity;
    for (let j = 0; j < individualArray.length; j++) {
      if (individualHighestValue < individualArray[j]) {
        individualHighestValue = individualArray[j];
      }
    }
    result.push(individualHighestValue);
  }
  return result;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

// confirm the ending
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

confirmEnding('Bastian', 'n');
