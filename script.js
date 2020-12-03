
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


const adder = (num1, num2) => {
  return num1 + num2;
} 

const takeawayer = (num1, num2) => {
  return num1 - num2;
} 

const multiplier = (num1, num2) => {
  return num1 * num2;
} 

const divider = (num1, num2) => {
  return num1 / num2;
} 

const power = (num1, num2) => {
  return num1 ** num2;
} 

menu()
console.log(power(2, 7))