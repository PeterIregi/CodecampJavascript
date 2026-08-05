let count = 0;

function cardCounter(card){
  let betOrHold ="";
  if (card >= 2 && card <= 6){
    count = count +1;
  }else if (card >=7 && card <= 9){
    count = count;
  }else if (card === 10 || card =="A" || card == "J" || card == "Q" || card == "K" ){
    count -= 1;
  }else {
    return "invaid card"
  }
  if (count >0){
    betOrHold = "Bet";
  }else{
    betOrHold = "Hold"
  }
  return `${count} ${betOrHold}`
}


