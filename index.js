
// Write your code here
// Task 1: Create a variable called multiply that will multiply the variables num1 and num2; the result of the multiplication should be 62.
let num1 = 31;
let num2 = 2;
const multiply = num1 * num2;

// Task 2: Create a variable called random that will generate a random integer greater than 0.
const random = Math.ceil(Math.random() * 1000);

// Task 3: Create a variable called mod set to an equation that will calculate the remainder of dividing variable num3 by num4; the remainder should be 4.
let num3 = 10;
let num4 = 6;
const mod = num3 % num4;

// Task 4: Create a variable called max that finds the highest number in a set; the value returned should be 20.
const max = Math.max(5, 10, 15, 20);

// Export the variables for testing
module.exports = {
  multiply,
  random,
  mod,
  max
};
