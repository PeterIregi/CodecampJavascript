function confirmEnding(str, check){
  if (str.trim().includes(" ") === false){
    if ((str.slice(str.length-check.length,str.length)===check)){
      return true
    }else{
      return false
    }
  }else{
    let strSlice = str.trim().split(" ");
    let lastWord = strSlice[strSlice.length-1]
    if (lastWord.slice(lastWord.length-check.length,lastWord.length) === check){
      return true
    }else{
      return false
    }  
  }
}
console.log(confirmEnding("Bastian","n"));
console.log(confirmEnding("Congratulation","on"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("Open sesame", "same"));
console.log(confirmEnding("Open sesame", "sage"));
console.log(confirmEnding("Open sesame", "game"));
console.log(confirmEnding("If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing", "mountain"));
console.log(confirmEnding("Abstraction", "action"));


