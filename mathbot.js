// step 1
let botName ="MathBot";
let greeting =`Hi there! My name is ${botName} and I am here to teach you about the Math object!`;
console.log(greeting);
//step 2
console.log("The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1.");
//step 3
let randomNum = Math.random();

console.log(randomNum);
//step 4
console.log("Now, generate a random number between two values.")
let min = 1;
let max =100;
//step 5
let randomNum2 = Math.random()*(max-min)+min;

console.log(randomNum2)
//step 6

console.log("The Math.floor() method rounds the value down to the nearest whole integer.");
//step 7
const numRoundedDown = Math.floor(6.7);
console.log(numRoundedDown);
//step 8
console.log("Now, generate a random integer between two values.");
//step 9
let randomInt = Math.random() * (max - min) + min;
console.log(randomInt);
//step 10
console.log("The Math.ceil() method rounds the value up to the nearest whole integer.");
//step 11
let numRoundedUp = Math.ceil(3.2);
console.log(numRoundedUp);
//step 12
console.log("The Math.round() method rounds the value to the nearest whole integer.");
//step 13

let numRounded = Math.round(2.7);
console.log(numRounded);
let numRounded2 = Math.round(11.2);
console.log(numRounded2);
//step 14
console.log("The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range.");
//step 15
let maxNum = Math.max(3,125,55,24);
console.log(maxNum);
let minNum = Math.min(6,90,14,2);
console.log(minNum);
//step 16
console.log("It was fun learning about the different Math methods with you!");

