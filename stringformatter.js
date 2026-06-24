//Step 1
let userInput = "   Hello World!   ";
//step 2
console.log("Original input:");
//step 3
console.log(userInput);
//step 4
let cleanedInput = userInput.trim();
//step 5
console.log("Result of trimming whitespace from both ends:");
console.log(cleanedInput);
//step 6
let trimmedStart = userInput.trimStart();
//step 7
console.log("After using the trimStart() method, leading spaces removed:");
console.log(trimmedStart);
//step 8
const trimmedEnd = userInput.trimEnd();
//step 9
console.log("After using the trimEnd() method, trailing spaces removed:");
console.log(trimmedEnd);
//step 10
let upperCaseInput = cleanedInput.toUpperCase();
//step 11
console.log("Result of using the toUpperCase() method:");
console.log(upperCaseInput);
//step 12
let lowerCaseInput = cleanedInput.toLowerCase();
console.log("Result of using the toLowerCase() method:");
console.log(lowerCaseInput);
//step 13
let lowercaseWord = "camelcase";
let camelCasedVersion = "";
console.log("Camel cased version:");
console.log(camelCasedVersion);
//step 14
camelCasedVersion = lowercaseWord.slice(0,5);
//step 15
console.log("Camel cased version:");
console.log(camelCasedVersion);
camelCasedVersion =lowercaseWord.slice(0,5)+lowercaseWord[5].toUpperCase();
//step 16
console.log(camelCasedVersion);
camelCasedVersion = lowercaseWord.slice(0,5)+lowercaseWord[5].toUpperCase()
+lowercaseWord.slice(-3
)