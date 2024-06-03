// Variable declarations
const name = "hitesh";
const repoCount = 50;

// Template literal usage
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// Output: Hello my name is hitesh and my repo count is 50

// String object instantiation
const gameName = new String("hitesh-hc-com");

// String methods
console.log(gameName.charAt(2)); // Character at index
// Output: t
console.log(gameName.indexOf("t")); // Index of a character
// Output: 2
console.log(gameName.substring(0, 4)); // Substring from start to end index
// Output: hite
console.log(gameName.slice(-8, 4)); // Slice with negative start index
// Output: hit
console.log(gameName.trim()); // Trim whitespace from both ends
// Output: hitesh-hc-com

// String manipulation
const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace("%20", "-")); // Replace substring
// Output: https://hitesh.com/hitesh-choudhary
console.log(url.includes("sundar")); // Check substring presence
// Output: false
console.log(gameName.split("-")); // Split string into array
// Output: [ 'hitesh', 'hc', 'com' ]
