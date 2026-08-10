let year;

function isLeapYear(year){
  if ((year%4) === 0){
    if (year%100 === 0){
      if(year%400 === 0){
        return `${year} is a leap year.`
      }
      return `${year} is not a leap year.`
    }
    return `${year} is a leap year.`
  }
  return `${year} is not a leap year,`
}
year =2024;
let result = isLeapYear(year);
console.log(result)

year = 2000;
result = isLeapYear(year);
console.log(result);

year = 1900;
result = isLeapYear(year);
console.log(result)