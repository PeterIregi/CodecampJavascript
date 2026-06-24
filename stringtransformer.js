//step 1
let originalString = "I love cats.";
//step 2
console.log("Original string:");
console.log(originalString);
//step 3
let replacedString = originalString.replace("cats", "dogs");

//step 4
console.log("After using the replace() method:");
console.log(replacedString);
//step 5
let exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);
//step 6
let dogsOnlySentence = exampleSentence.replace("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);
//step 7
dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");

console.log(dogsOnlySentence);
//step 8
let learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);
//step 9
let repeatedLove = "love ".repeat(3);

console.log(repeatedLove);
//