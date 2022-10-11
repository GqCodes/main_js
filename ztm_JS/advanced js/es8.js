/* 
STRING PADDING - just add spaces either at the start or end 
.padStart()
.padEnd()
*/
console.log("turtle".padStart(10));
console.log("turtle".padEnd(10));

/* 
OBJECT VALUES & ENTRIES
*/

let obj = {
  username0: "santa",
  username1: "rudolf",
  username2: "mr.grinch",
};

Object.values(obj).forEach((value) => console.log(value));
Object.entries(obj).forEach((value) => console.log(value));

Object.entries(obj).map((value) => value[1] + value[0].replace("username", ""));
