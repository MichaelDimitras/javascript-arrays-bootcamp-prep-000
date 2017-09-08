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
