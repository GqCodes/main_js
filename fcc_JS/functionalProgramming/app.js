// Functional programming
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line

// TERMINOLOGY
// Function that returns a string representing a cup of green tea
function prepareGreenTea() {
  return 'greenTea';
}

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);

// HAZARDS OF USING IMPERATIVE CODE
// tabs is an array of titles of each site open within the window
const Window = function (tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {
  // Only change code below this line

  const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
  const tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
};

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

// AVOID MUTATIONS & SIDE EFFECTS
// The global variable
let fixedValue = 4;

function incrementer() {
  return fixedValue + 1;
}

// PASS ARGUMENTS TO AVOID EXTERNAL DEPENDENCE IN A FUNCTION
// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer() {
  // Only change code above this line
}

// REFACTOR GLOBAL VARIABLES
// The global variable
const bookList = [
  'The Hound of the Baskervilles',
  'On The Electrodynamics of Moving Bodies',
  'Philosophiæ Naturalis Principia Mathematica',
  'Disquisitiones Arithmeticae',
];

// Change code below this line
function add(books, bookName) {
  return [...books, bookList];

  // Change code above this line
}

// Change code below this line
function remove(books, bookName) {
  const newBooks = [...books];
  let book_index = newBooks.indexOf(bookName);
  if (book_index >= 0) {
    newBooks.splice(book_index, 1);
    return newBooks;

    // Change code above this line
  }
}

// MAP METHOD TO EXTRACT DATA FROM AN ARRAY
// The global variable
const watchList = [
  {
    Title: 'Inception',
    Year: '2010',
    Rated: 'PG-13',
    Released: '16 Jul 2010',
    Runtime: '148 min',
    Genre: 'Action, Adventure, Crime',
    Director: 'Christopher Nolan',
    Writer: 'Christopher Nolan',
    Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy',
    Plot: 'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
    Language: 'English, Japanese, French',
    Country: 'USA, UK',
    Awards: 'Won 4 Oscars. Another 143 wins & 198 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    Metascore: '74',
    imdbRating: '8.8',
    imdbVotes: '1,446,708',
    imdbID: 'tt1375666',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'Interstellar',
    Year: '2014',
    Rated: 'PG-13',
    Released: '07 Nov 2014',
    Runtime: '169 min',
    Genre: 'Adventure, Drama, Sci-Fi',
    Director: 'Christopher Nolan',
    Writer: 'Jonathan Nolan, Christopher Nolan',
    Actors: 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: 'English',
    Country: 'USA, UK',
    Awards: 'Won 1 Oscar. Another 39 wins & 132 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg',
    Metascore: '74',
    imdbRating: '8.6',
    imdbVotes: '910,366',
    imdbID: 'tt0816692',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'The Dark Knight',
    Year: '2008',
    Rated: 'PG-13',
    Released: '18 Jul 2008',
    Runtime: '152 min',
    Genre: 'Action, Adventure, Crime',
    Director: 'Christopher Nolan',
    Writer:
      'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',
    Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
    Plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
    Language: 'English, Mandarin',
    Country: 'USA, UK',
    Awards: 'Won 2 Oscars. Another 146 wins & 142 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
    Metascore: '82',
    imdbRating: '9.0',
    imdbVotes: '1,652,832',
    imdbID: 'tt0468569',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'Batman Begins',
    Year: '2005',
    Rated: 'PG-13',
    Released: '15 Jun 2005',
    Runtime: '140 min',
    Genre: 'Action, Adventure',
    Director: 'Christopher Nolan',
    Writer: 'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
    Actors: 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
    Plot: 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.',
    Language: 'English, Urdu, Mandarin',
    Country: 'USA, UK',
    Awards: 'Nominated for 1 Oscar. Another 15 wins & 66 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg',
    Metascore: '70',
    imdbRating: '8.3',
    imdbVotes: '972,584',
    imdbID: 'tt0372784',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'Avatar',
    Year: '2009',
    Rated: 'PG-13',
    Released: '18 Dec 2009',
    Runtime: '162 min',
    Genre: 'Action, Adventure, Fantasy',
    Director: 'James Cameron',
    Writer: 'James Cameron',
    Actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
    Plot: 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    Language: 'English, Spanish',
    Country: 'USA, UK',
    Awards: 'Won 3 Oscars. Another 80 wins & 121 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
    Metascore: '83',
    imdbRating: '7.9',
    imdbVotes: '876,575',
    imdbID: 'tt0499549',
    Type: 'movie',
    Response: 'True',
  },
];

// Only change code below this line

const ratings = watchList.map((movie) => ({
  title: movie.Title,
  rating: movie.imdbRating,
}));
// Only change code above this line

console.log(JSON.stringify(ratings));

// IMPLEMENT MAP ON A PROTOTYPE
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
  const newArray = [];
  // Only change code below this line
  this.forEach((el) => {
    newArray.push(callback(el));
  });
  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function (item) {
  return item * 2;
});

// FILTER METHOD TO EXTRACT DATA FROM ARRAY
// The global variable
const watchList = [
  {
    Title: 'Inception',
    Year: '2010',
    Rated: 'PG-13',
    Released: '16 Jul 2010',
    Runtime: '148 min',
    Genre: 'Action, Adventure, Crime',
    Director: 'Christopher Nolan',
    Writer: 'Christopher Nolan',
    Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy',
    Plot: 'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
    Language: 'English, Japanese, French',
    Country: 'USA, UK',
    Awards: 'Won 4 Oscars. Another 143 wins & 198 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    Metascore: '74',
    imdbRating: '8.8',
    imdbVotes: '1,446,708',
    imdbID: 'tt1375666',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'Interstellar',
    Year: '2014',
    Rated: 'PG-13',
    Released: '07 Nov 2014',
    Runtime: '169 min',
    Genre: 'Adventure, Drama, Sci-Fi',
    Director: 'Christopher Nolan',
    Writer: 'Jonathan Nolan, Christopher Nolan',
    Actors: 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: 'English',
    Country: 'USA, UK',
    Awards: 'Won 1 Oscar. Another 39 wins & 132 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg',
    Metascore: '74',
    imdbRating: '8.6',
    imdbVotes: '910,366',
    imdbID: 'tt0816692',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'The Dark Knight',
    Year: '2008',
    Rated: 'PG-13',
    Released: '18 Jul 2008',
    Runtime: '152 min',
    Genre: 'Action, Adventure, Crime',
    Director: 'Christopher Nolan',
    Writer:
      'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',
    Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
    Plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
    Language: 'English, Mandarin',
    Country: 'USA, UK',
    Awards: 'Won 2 Oscars. Another 146 wins & 142 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
    Metascore: '82',
    imdbRating: '9.0',
    imdbVotes: '1,652,832',
    imdbID: 'tt0468569',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'Batman Begins',
    Year: '2005',
    Rated: 'PG-13',
    Released: '15 Jun 2005',
    Runtime: '140 min',
    Genre: 'Action, Adventure',
    Director: 'Christopher Nolan',
    Writer: 'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
    Actors: 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
    Plot: 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.',
    Language: 'English, Urdu, Mandarin',
    Country: 'USA, UK',
    Awards: 'Nominated for 1 Oscar. Another 15 wins & 66 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg',
    Metascore: '70',
    imdbRating: '8.3',
    imdbVotes: '972,584',
    imdbID: 'tt0372784',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'Avatar',
    Year: '2009',
    Rated: 'PG-13',
    Released: '18 Dec 2009',
    Runtime: '162 min',
    Genre: 'Action, Adventure, Fantasy',
    Director: 'James Cameron',
    Writer: 'James Cameron',
    Actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
    Plot: 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    Language: 'English, Spanish',
    Country: 'USA, UK',
    Awards: 'Won 3 Oscars. Another 80 wins & 121 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
    Metascore: '83',
    imdbRating: '7.9',
    imdbVotes: '876,575',
    imdbID: 'tt0499549',
    Type: 'movie',
    Response: 'True',
  },
];
// Only change code below this line

const filteredList = watchList
  .map((movie) => ({
    title: movie.Title,
    rating: movie.imdbRating,
  }))
  .filter((movie) => parseInt(movie.rating) <= 8.0);

// Only change code above this line

console.log(filteredList);

// IMPLEMENT FILTER METHOD ON A PROTOTYPE
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
  // Only change code below this line
  const newArray = [];
  this.forEach((item) => {
    if (callback(item)) {
      newArray.push(item);
    }
  });
  // Only change code above this line
  return newArray;
};

const new_s = s.myFilter(function (item) {
  return item % 2 === 1;
});

// RETURN PART OF ARRAY USING SLICE METHOD
function sliceArray(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice);
}

const inputAnim = ['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'];
sliceArray(inputAnim, 1, 3);

// REMOVE ELEMENTS FROM ARRAY USIGN SLICE
function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.slice(0, 3);

  // Only change code above this line
}

const inputCities = ['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'];
nonMutatingSplice(inputCities);

// COMBINE TWO ARRAYS USING CONCAT METHOD
function nonMutatingConcat(original, attach) {
  first.concat(second);
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);

// ADD ELEMENTS TO END OF AN ARRAY USING CONCAT INSTEAD OF PUSH
function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.concat(newItem);

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);

// USE REDUCE TO ANALYZE DATA
// The global variable
const watchList = [
  {
    Title: 'Inception',
    Year: '2010',
    Rated: 'PG-13',
    Released: '16 Jul 2010',
    Runtime: '148 min',
    Genre: 'Action, Adventure, Crime',
    Director: 'Christopher Nolan',
    Writer: 'Christopher Nolan',
    Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy',
    Plot: 'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
    Language: 'English, Japanese, French',
    Country: 'USA, UK',
    Awards: 'Won 4 Oscars. Another 143 wins & 198 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    Metascore: '74',
    imdbRating: '8.8',
    imdbVotes: '1,446,708',
    imdbID: 'tt1375666',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'Interstellar',
    Year: '2014',
    Rated: 'PG-13',
    Released: '07 Nov 2014',
    Runtime: '169 min',
    Genre: 'Adventure, Drama, Sci-Fi',
    Director: 'Christopher Nolan',
    Writer: 'Jonathan Nolan, Christopher Nolan',
    Actors: 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: 'English',
    Country: 'USA, UK',
    Awards: 'Won 1 Oscar. Another 39 wins & 132 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg',
    Metascore: '74',
    imdbRating: '8.6',
    imdbVotes: '910,366',
    imdbID: 'tt0816692',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'The Dark Knight',
    Year: '2008',
    Rated: 'PG-13',
    Released: '18 Jul 2008',
    Runtime: '152 min',
    Genre: 'Action, Adventure, Crime',
    Director: 'Christopher Nolan',
    Writer:
      'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',
    Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
    Plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
    Language: 'English, Mandarin',
    Country: 'USA, UK',
    Awards: 'Won 2 Oscars. Another 146 wins & 142 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
    Metascore: '82',
    imdbRating: '9.0',
    imdbVotes: '1,652,832',
    imdbID: 'tt0468569',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'Batman Begins',
    Year: '2005',
    Rated: 'PG-13',
    Released: '15 Jun 2005',
    Runtime: '140 min',
    Genre: 'Action, Adventure',
    Director: 'Christopher Nolan',
    Writer: 'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
    Actors: 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
    Plot: 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.',
    Language: 'English, Urdu, Mandarin',
    Country: 'USA, UK',
    Awards: 'Nominated for 1 Oscar. Another 15 wins & 66 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg',
    Metascore: '70',
    imdbRating: '8.3',
    imdbVotes: '972,584',
    imdbID: 'tt0372784',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'Avatar',
    Year: '2009',
    Rated: 'PG-13',
    Released: '18 Dec 2009',
    Runtime: '162 min',
    Genre: 'Action, Adventure, Fantasy',
    Director: 'James Cameron',
    Writer: 'James Cameron',
    Actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
    Plot: 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    Language: 'English, Spanish',
    Country: 'USA, UK',
    Awards: 'Won 3 Oscars. Another 80 wins & 121 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
    Metascore: '83',
    imdbRating: '7.9',
    imdbVotes: '876,575',
    imdbID: 'tt0499549',
    Type: 'movie',
    Response: 'True',
  },
];

function getRating(watchList) {
  // Only change code below this line
  let averageRating;

  const filteredMovies = watchList
    .filter((movie) => movie.Director === 'Christopher Nolan')
    .map((movie) => ({
      rating: +movie.imdbRating,
    }));

  const sumRating = filteredMovies.reduce((acc, current) => acc + current.rating, 0);

  averageRating = sumRating / filteredMovies.length;

  // Only change code above this line
  return averageRating;
}

console.log(getRating(watchList));

//  USE HIGH ORDER FUNCTIONS TO SOLVE COMPLEX PROBLEMS
const squareList = (arr) => {
  // Only change code below this line
  return arr.filter(isPositive).filter(isDecimal).map(square);

  function isPositive(num) {
    return num >= 0;
  }
  function isDecimal(num) {
    return Math.floor(num) === num;
  }
  function square(num) {
    return num * num;
  }
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

// Sort an Array Alphabetically using sort method
function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr.sort();
  // Only change code above this line
}

alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g']);

// RETURN SORTED ARRAY WITHOUT MUTATION
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  const newArr = [].concat(arr);

  return newArr.sort(compareFunction);
  // Only change code above this line
}

nonMutatingSort(globalArray);

// SPLIT A STRING USING SPLIT METHOD
function splitify(str) {
  // Only change code below this line
  return str.split(/[\s\W]/);
  // Only change code above this line
}

splitify('Hello World,I-am code');

// COMBINE AN ARRAY INTA A STRING USING JOIN
function sentensify(str) {
  // Only change code below this line

  return str.split(/\W/).join(' ');
  // Only change code above this line
}

sentensify('May-the-force-be-with-you');

// THE EVERY METHOD
function checkPositive(arr) {
  return arr.every((el) => el > 0);
}

checkPositive([1, 2, 3, -4, 5]);

// SOME METHOD
function checkPositive(arr) {
  // Only change code below this line
  return arr.some((el) => el > 0);
  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
