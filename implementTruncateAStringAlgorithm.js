function truncateString(str, num){
  if (str.length <= num){
    return str
  } else{
    let newStr = "" ;
    for (let i = 0; i < num; i++){
      newStr += str[i]
    }
    newStr += "...";
    return newStr

  }
}


console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))

truncateString("Peter Piper picked a peck of pickled peppers", 11);


truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);

truncateString("A-", 1);


truncateString("Absolutely Longer", 2);