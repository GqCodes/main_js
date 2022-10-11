// Web Storage API: Session & Local Storage and Persistent Data

// Not part of the DOM - refers to the Window API
// Available to JS via the global variable: window

// We do not have to type. It is implied:

const myArray = ["eat", "sleep", "code"];
const myObject = {
  name: "chris",
  hobbies: ["eat", "sleep", "code"],
  logName: function () {
    console.log(this.name);
  },
};

// session / local storage only store string data
// Session data ex:
// sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
// const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
// console.log(mySessionData);

// Local Storage ex:
localStorage.setItem("myLocalStore", JSON.stringify(myArray));
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(myLocalData);

// if the data is not there and you try to pull it, it will return null
localStorage.removeItem("myLocalStore"); //this removes the item decalred (myLocalStorage)
localStorage.clear(); //this clears EVERYTHING
localStorage.key(0); //returns the name or key of the storage
localStorage.length; //returns how many names or 'keys' there are
