var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`]

function addElementToBeginningOfArray(arr, e){
  return [e,...arr];
}


function destructivelyAddElementToBeginningOfArray(arr,e) {
  arr.unshift(e);
  return arr
}


function accessElementInArray(arr, n){
  return arr[n];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  return arr.shift();
}

function removeElementFromBeginningOfArray(arr){
  return arr.slice(1);
}


function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr){
  return arr.slice(-1);
}


function destructivelyAddElementToEndOfArray(arr, e){
  arr.push(e);
  return arr;
}

function addElementToEndOfArray(arr, e){
  return [arr...,e];
}
