console.log('Welcome to the calculator app!'); 
console.log('You can complete addition, substraction, power of, muliplication and division with two numbers!'); 

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

console.log(adder(2, 7))