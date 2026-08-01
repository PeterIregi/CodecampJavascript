function maskEmail(email){
  let name = email.split("@")
  let newName = "";
  for (let i = 0; i<= name[0].length-1 ;i++){
    if (i === 0 ){
      newName +=name[0][i]
    } else if(i === ((name[0].length-1))){
      newName += name[0][i]
    }else{
      newName += "*"
    }
    
} 
  let newEmail = newName+"@"+name[1]
  return newEmail
  
}

let email = "iregipeter4@gmail.com";
console.log(maskEmail(email));

email="apple.pie@example.com";
console.log(maskEmail(email));

email="freecodecamp@example.com";
console.log(maskEmail(email));

email="info@test.dev";
console.log(maskEmail(email));

email="user@domain.org";
console.log(maskEmail(email));