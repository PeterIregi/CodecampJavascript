//step 1
let fccSentence = "freeCodeCamp is a great place to learn web development."
//step 2
console.log("Here are some examples of the includes() method:")
//step 3
let hasFreeCodeCamp =fccSentence.includes("freeCodeCamp");
//step 4
console.log(`fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`)
//step 5
let hasJavaScript = fccSentence.includes("JavaScript");

console.log(`fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`)
//step 6

let hasLowercaseFCC = fccSentence.includes("freecodecamp");

console.log(`fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`);
//step 7

let message = "Welcome to freeCodeCamp!";

console.log("Here are some examples of the slice() method:")