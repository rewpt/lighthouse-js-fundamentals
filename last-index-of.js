const lastIndexOf = (array, value) => {
  if(array.length === 0){
    return -1;
  }
  let indexArr = [-1];
  for(let i = 0; i < array.length; i++){
    console.log('looped' + i)
    console.log('indexArr: ' + indexArr)
    if(array[i] === value){
      indexArr.push(i);
    } 
  }
  let lastIndex = indexArr[indexArr.length - 1];
  return lastIndex;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);