const range = (start, end, step) => {
  //Initial checks to make sure it's not undefined or the function won't make logical sense
  if(start === undefined || end === undefined || step === undefined) {
    return [];
  }
  if(start > end) { return [] };
  if(step === 0 || step <= 0) { return [] };
  //Initialize array to return at the end of the function
  const finalArray = [];
  //loop to iterate from start to finish and increment by step
  for(let i = start; i <= end; i += step) {
    finalArray.push(i);
  }
  return finalArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));