
 //we will try to understand how the console.log function works using some strings
 //first we will print hi there
//step 1
console.log("Hi there!");
//lets run this and see the result
//step 2
//now for something longer 
console.log("I am  excited to talk to you.");
//lets see the result
//step 3
//now we will declare a variable and leave it empty
let bot ;
//nothing has changed cause we are not doing anything in the console 
//so nothing extra is displayed
//step 4
//lets assign the bot variable a valu and run the program again

bot = "teacherBot";
//still nothing new is displayed 
//step 5
//lets declare another variable and this time initialize it with a value

let botLocation = "the universe";
//if we run the console will only display what was logged in the beggining 
//this is because we have not logged anything to the console after that

//step 6
//now lets log something to the console and see if it will appear

console.log("Allow me to introduce myself.");
//step 7
//as expected it does 
//lets declare a new variabl and make this variable a mixture of a string and a previously 
//declared variable
//then console.log it so we see if it will join the two 
let botIntroduction = "My name is "+ bot + ".";
console.log(botIntroduction);
//we should see a new string when we consolelog this
//step 8
//lets try to repeat this but with different string and variable used but same method

let botLocationSentence = "I live in " + botLocation + ".";
console.log(botLocationSentence);
//step 9
//we see it joins the string with the referenced variable each time 
//as long as the referenced variable is okay
bot = "professorBot";
//step 10
let nicknameIntroduction = "My nickname is " + bot + ".";
console.log(nicknameIntroduction);
//step 11
//lets try assigning a variable with a new value and see if the output 
//will change when we console log it
bot = "awesomeTeacherBot";
//step 12
let newNicknameGreeting = "I love my nickname but I wish people would call me " + bot +".";
console.log(newNicknameGreeting);
//step 13
//it changes and now it displays the new value assigned and not the old one from before

let favoriteSubject = "Computer Science";
//step 14
//you can  place a variable in between two strings and still join them
//to make a single string that can be displayed
let favoriteSubjectSentence = "My favorite subject is " + favoriteSubject + ".";
console.log(favoriteSubjectSentence);
//step 15
console.log("Well, it was nice to talk to you. Have a nice day!");
/**/


