/*************** 
DESTRUCTURING
****************/
const obj = {
  player: "bobby",
  experience: 100,
  wizardLevel: false,
};

/*
const player = obj.player;
const experience = obj.experience;
 */

// this does the same as above using destructuring. so that we can now access player and experience
const { player, experience } = obj;

/****************
DEFAULT ARGUMENTS
*****************/
function greet(name = "", age = 30, pet = "cat") {
  return `Hello ${name} you seem to be ${age - 10}. What a lovely ${pet} you have`;
}
// if you dont pass any args when the function is called, these will be the default args. howevere if you call the function and pass args, they will overwrite teh default args
