const merge = (arr1, arr2) => {
  if(arr1[0] === undefined && arr2[0] === undefined) { return [] }
  else if(arr2[0] === undefined) {
    return arr1; }
  else if(arr1[0] === undefined) { return arr2; }
  //Use the spread operator to dump the values together and enclose them in an array
  let mergedArr = [...arr1, ... arr2];
  // Use sort method to compare values in the array and sort smallest to largest this is the verbose syntax
  // Remember I don't need explicit return for one line between the curly braces
  // We are passing back a value -1 0 or 1 value to sort, which would otherwise convert it to unicode and would
  // end up sorting it by the first digit, then comparing the second digits like alphabetical order
  //To reverse the sort order highest to lowest we just switch 1 and -1
  /*mergedArr.sort((a,b) => {
    if(a > b){ 1 } This means that a was greater than be, so b will go first (it's lower)
    else if(b > a){ -1 } This means b was greater than a so a will be first (it's lower)
    else { 0} They're the same
  })*/
  // Here is the short version of what is directly above
  // To sort the numbers in reverse order we would just say b - a in the function
  mergedArr.sort((a,b) => a - b);
  return mergedArr;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);