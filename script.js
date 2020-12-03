// this is importing the maths.js file 
const maths = require("./maths");
// this is the prompt package for user input
const prompt = require('prompt')  
// requires in the new user input package 
const readlineSync = require('readline-sync');


// going to divide our logic into 3 core functions
const menu = () => {
  console.log("Welcome to the calculator app!");
  console.log("what would you like to do? ");
  console.log(`
    1. Add 2 numbers
    2. Subtract 2 numbers
    3. Multiply 2 numbers
    4. Divide 2 numbers
    5. Power of 2 numbers
  `);
}

const input = () => {
  const selection = parseInt(readlineSync.question('> '));
  console.log("Enter number 1")
  const num1 = parseInt(readlineSync.question('> '));
  console.log("Enter number 2")
  const num2 = parseInt(readlineSync.question('> '));
  return {
    input: selection,
    num1: num1,
    num2: num2
  }
}

const userSelection = (selections) => {
  switch (selections.input){ 
    case 1:
      // adding two numbers
      const addResult = maths.adder(selections.num1, selections.num2); 
      console.log(addResult); 
      break;
    case 2:
      // takeaway two numbers
      const subtractResult = maths.takeawayer(selections.num1, selections.num2); 
      console.log(subtractResult); 
      break;
    case 3:
        // multiply two numbers
      const multiplyResult = maths.multiplier(selections.num1, selections.num2); 
      console.log(multiplyResult); 
      break;
    case 4:
      // divde two numbers
      const divideResult = maths.divider(selections.num1, selections.num2); 
      console.log(divideResult); 
      break;
    case 5:
      // power of two numbers
      const powerOfResult = maths.power(selections.num1, selections.num2); 
      console.log(powerOfResult); 
      break;
    default: 
      console.log("cannot select this!"); 
  }
}

// first run the menu for the user
menu()
// now the user can make a selection - input = number user types in 
const selections = input()
// when number selected, run the userSelections switch statement
userSelection(selections)