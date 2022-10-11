// Fetch API
// Callbacks, Promoises, Thenables and Async/Await

// Callbacks are functions passed as parameters
function firstFunction(parameters, callback) {
  // do stuff
  callback();
}
// "Callback Hell" - this can go multi level deeper

// firstFunction(param, function () {
//   // do stuff
//   secondFunction(param, function () {
//     // do more stuff
//     thirdFunction(param, function () {
//       // do even more stuff
//     });
//   });
// });

// Promises fix the "callback hell" issue.
// 3 states: Pending, Fulfilled, Rejected
const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Yes! resolved the promise");
  } else {
    reject("No! rejected the promise");
  }
});
console.log(myPromise);

// Thenabales
myPromise
  .then((value) => {
    return value + 1;
  })
  .then((newValue) => {
    console.log(newValue);
  })
  .catch((err) => {
    console.log(err);
  });

// Await concept
const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("myNextPromise resolved!");
  }, 3000);
});

myNextPromise.then((value) => {
  console.log(value);
});
myPromise.then((value) => {
  console.log(value);
});

//   Fetch API returns a promise on its own
const users = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      console.log(user);
    });
  });

//   Async / Await - can write cleaner code without thenabales
const myUsers = {
  userList: [],
};

const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  return jsonUserData;
};

const anotherFunc = async () => {
  const data = await myCoolFunction();
  myUsers.userList = data;
  console.log(myUsers.userList);
};

anotherFunc();
console.log(myUsers.userList);

// Workflow Function
const getAllUserEmails = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();

  const userEmailArray = jsonUserData.map((user) => {
    return user.email;
  });

  postToWebPage(userEmailArray);
};

const postToWebPage = (data) => {
  console.log(data);
};

getAllUserEmails();

//  2nd Parameter of Fetch is an object

const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "get",
    headers: {
      Accept: "application/json",
    },
  });
  const jsonJokeData = await response.json();

  console.log(jsonJokeData.joke);
};

getDadJoke();

// Post - send new data to API that can be recorded & the API can send confirmation back

const jokeObject = {
  id: "iGJeVKmWDlb",
  joke: "My cat was just sick on the carpet, I don't think it's feline well.",
};

const postData = async (jokeObj) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeObj),
  });
  const jsonResponse = await response.json();

  console.log(jsonResponse);
};

postData(jokeObject);

// When working with API's, read the docs to determine what data they accept like with "headers for the dad jokes & the httpbin"

const requestJoke = async (firstName, LastName) => {
  const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${LastName}&limitTo=[nerdy]`);
  const jsonResponse = await response.json();

  console.log(jsonResponse.value);
};

requestJoke("Clint", "Eastwood");

// abstract into functions
// maybe from a form
const getDataFromForm = () => {
  const requestObj = {
    firstName: "Bruce",
    lastName: "Lee",
    categories: ["nerdy"],
  };
  return requestObj;
};

const buildRequestUrl = (requestData) => {
  return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
};

const requestJoke1 = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value.joke;
  postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
  console.log(joke);
};

// Procedural "Workflow" Function
const processJokeRequest = async () => {
  const requestData = getDataFromForm();
  const requestUrl = buildRequestUrl(requestData);
  await requestJoke(requestUrl);
  console.log("finished!");
};

processJokeRequest();
