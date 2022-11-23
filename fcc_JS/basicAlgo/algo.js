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

// repeat a string
function repeatStringNumTimes(str, num) {
  let finalString = '';
  for (let i = 0; i < num; i++) {
    finalString += str;
  }
  return finalString;
}

repeatStringNumTimes('abc', 3);

// truncate a string
function truncateString(str, num) {
  let finalStr = str;
  if (str.length > num) {
    finalStr = str.slice(0, num) + '...';
  }
  return finalStr;
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);

// finders keeper
function findElement(arr, func) {
  return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);

// Boo who
function booWho(bool) {
  return typeof bool === 'boolean';
}

booWho(null);

// title case a sentence
function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((val) => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(' ');
}

titleCase("I'm a little tea pot");

// slice & splice
function frankenSplice(arr1, arr2, n) {
  let newArr = [...arr2];
  newArr.splice(n, 0, ...arr1);
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// falsey bouncer
function bouncer(arr) {
  return arr.filter((elem) => !!elem);
}

bouncer([7, 'ate', '', false, 9]);

// where do I belong
function getIndexToIns(arr, num) {
  let index = arr.sort(customSort).findIndex((elem) => elem >= num);
  return index === -1 ? arr.length : index;
}

function customSort(a, b) {
  return a - b;
}

getIndexToIns([40, 60], 50);
