
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

// this is an object and the module exports allows us to export modules 

module.exports = {
  multiplier: multiplier,
  adder: adder,
  takeawayer: takeawayer,
  divider: divider,
  power: power
}
