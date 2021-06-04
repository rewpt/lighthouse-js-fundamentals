const concat = (arr1, arr2) => {
  if(arr1[0] === undefined && arr2[0] === undefined) { return [] }
  else if(arr2[0] === undefined) {
    return arr1; }
  else if(arr1[0] === undefined) { return arr2; }

  let concatArr = arr1 + ',' + arr2;
  let splitArr = concatArr.split(',');
  for(let i = 0; i < splitArr.length; i++) {
    splitArr[i] = Number(splitArr[i]);
  }
  return splitArr;
}
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);