 const lunch = [];
function addLunchToEnd(arr,str){
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr
};
function addLunchToStart(arr,str){
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr
};
function removeLastLunch(arr){
  if (arr.length === 0){
    return "No lunches to remove."
  }else{
    let str=arr.pop();
    console.log(`${str} removed from the end of the lunch menu.`);
    return arr
  }
}
function