var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`]

function addElementToBeginningOfArray(arr, e){
  return [e,...arr];
}


function destructivelyAddElementToBeginningOfArray(arr,e) {
  return arr.push(e);
}


function accessElementInArray(arr, n){
  return arr[n];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  return arr.shift();
}
//
// function removeElementFromBeginningOfArray(arr){
//   return arr.slice(1);
// }
//
//
// function destructivelyRemoveElementFromEndOfArray(arr){
//   return arr.pop();
// }
//
// function removeElementFromEndOfArray(arr){
//   return arr.slice(-1);
// }
