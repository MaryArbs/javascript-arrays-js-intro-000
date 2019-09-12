var chocolateBars= ["snickers","hundred grand", "kitkat", "skittles"];
var candyString= "foo";

function addElementToBeginningOfArray(chocolateBars, candyString){
return [candyString, ... chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString){
chocolateBars.unshift(candyString);
return chocolateBars;
}
function addElementToEndOfArray (chocolateBars, candyString){
  return [...chocolateBars, candyString];

function destructivelyAddElementToEndOfArray (chocolateBars, candyString) {
  return chocolateBars.push(candyString);
}
function accessElementInArray (chocolateBars, index){
  return (chocolateBars [2]);
}
function destructivelyRemoveElementFromBeginningOfArray (chocolateBars){
  chocolateBars.shift(candyString);
  return chocolateBars;
}
function removeElementFromBeginningOfArray (chocolateBars) {
  chocolateBars.slice(1);
  return chocolateBars;
}
