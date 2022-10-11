// // DOM selectors

// // Recommends to use:
// querySelector & querySelectorAll; //treat them as you would using CSS

// // Can use these to add a class dynamically to change the styling for example with css
// getAttribute & setAttribute;

// // the more common way of CHANGING STYLES:
// style.{property} //ok

// className; //best
// classList; //best

// The issue with this is seperation of concerns
let h1 = document.querySelector("h1");
// THIS is a beter way of doing it:
h1.className = "coolTitle";

// Methods to use on classes
// classList.add;
// classList.remove;
// classList.toggle;

let li = document.querySelector("li");
li.classList.add("done");

// // ##BONUS
// innerHTML; //dangerous changes what in the HTML

// parentElement;
// children;
document.querySelectorAll("li")[1].parentElement; //gives the UL
document.querySelectorAll("li")[1].parentElement.parentElement; //gives the BODY
document.querySelectorAll("li")[1].parentElement.parentElement.children; //gives the children of the body

/**
 ## It's important to CACHE selectors in variables
 */
