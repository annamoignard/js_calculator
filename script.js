// this is importing the maths.js file 
const maths = require("./maths");
// this is the prompt package for user input
const prompt = require('prompt') 


// going to divide our logic into 3 core functions
const menu = () => {
  console.log("Welcome to the calculator app!");
  console.log("what would you like to do?");
  console.log(`
    1. Add 2 numbers
    2. Subtract 2 numbers
    3. Multiply 2 numbers
    4. Divide 2 numbers
    5. Power of 2 numbers
  `);
}

const userSelection = (selection) => {
  switch (selection.input){
    
  }

}


menu()
