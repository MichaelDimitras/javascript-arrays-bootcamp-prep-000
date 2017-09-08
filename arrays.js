function addElementToBeginningOfArray(arr, e){
  return arr.push(e);
}


function destructivelyAddElementToBeginningOfArray(arr,e) {
  return [e,...arr];
}
