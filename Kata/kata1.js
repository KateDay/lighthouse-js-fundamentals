let sumLargestNumbers = function(data) {
  // Put your solution here
 return data.reduce(function(a, b) {
  return a + b
  }, 0);

};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));