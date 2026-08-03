let minIncomeForDuplex = 60000;
let minCreditScoreForDuplex = 700;
let minIncomeForCondo = 45000;
let minCreditScoreForCondo = 680;
let minIncomeForCar = 30000;
let minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
 let message;
  if (annualIncome >= minIncomeForDuplex && creditScore >= minCreditScoreForDuplex){
    message = "You qualify for a duplex, condo, and car loan."
  }
  return message
}