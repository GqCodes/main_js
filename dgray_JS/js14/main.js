// SCOPE w/ CONST LET VAR

// global scope - variable is available everywhere

// local scope - variable inside of something & only availabe to whatever its inside of ex.
{
  let a = 1;
}

// or

function myFunc() {
  const b = 3;
}

// VAR is a function scope variable

function myFunk() {
  var x = 10;
  let y = 2;
  const z = 5;

  {
    var x = 11; // var here is function scoped
    const z = 6; // const is bloack scope
    console.log(`block: ${x}`);
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);
  }
  console.log(`function: ${x}`);
  console.log(`function: ${y}`);
  console.log(`function: ${z}`);
}

myFunk();
