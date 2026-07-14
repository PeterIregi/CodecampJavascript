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

