const calculateRectangleArea = (length, width) => {
  let area =  length * width;
  return (area > 0) ? area : undefined;  
}
const calculateCircleArea = (radius) => {
  if(radius < 0){return undefined;}
  //Lighthouse labs parser did not understand radius ** 2
  let area = Math.PI * (radius * radius);
  return (area > 0) ? area : undefined; 
}
const calculateTriangleArea =(base, height) => {
  let area = base * height / 2;
  return (area > 0) ? area : undefined; 
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined