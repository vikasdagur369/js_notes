const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use map to multiply each number by 10, then add 1 to each result
// Use filter to keep only the numbers that are greater than or equal to 40
const newNums = myNumers
  .map((num) => num * 10) // Multiply each number by 10
  .map((num) => num + 1) // Add 1 to each result
  .filter((num) => num >= 40); // Keep only numbers greater than or equal to 40

console.log(newNums); // Output: [ 41, 51, 61, 71, 81, 91 ]
