/*
 * Programming Quiz: Build A Triangle (5-3)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `buildTriangle()` function
 * - Your `buildTriangle()` function should take one argument (or you can say parameter)
 * - Your `laugh()` function should build the triangle as describe above
 */


/* creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

your code goes here.  Make sure you call makeLine() in your own code.
const buildTriangle = (x)  => {
  let fullTri = ''
  for(let i = 0; i < x; i++){
    fullTri += makeLine(i);
  }
  return fullTri;
}
console.log(buildTriangle(6)); */
// test your code by uncommenting the following line

const merge = (arr1, arr2) => {
  if(arr1[0] === undefined && arr2[0] === undefined) { return [] }
  else if(arr2[0] === undefined) {
    return arr1; }
  else if(arr1[0] === undefined) { return arr2; }
  //set up an array to return
  let mergedArr = [];
  console.log('length1: ' + arr1.length)
  console.log('length2: ' + arr2.length)
  const iLength = arr1.length;
  const jLength = arr2.length;
  for(let i = 0; i < iLength; i++){
    for(let j = 0; j < jLength; j++){
      //if the number is arr2 is smaller or equal in size it can go behind that number
      if(arr2[j] <= arr1[i]){
        mergedArr.push(arr2[j]);
      }
      console.log(mergedArr)
    }
  }
  return mergedArr;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);