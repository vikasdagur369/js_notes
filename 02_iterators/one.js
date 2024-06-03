// for of

const arr = [1, 2, 3, 4, 5];

// Iterate through each element of the array using for...of loop
for (const num of arr) {
  console.log(num); // Output: 1 2 3 4 5 (Each number on a new line)
}

const greetings = "Hello world!";

// Iterate through each character of the string using for...of loop
for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
  // Output: Each char is H Each char is e Each char is l Each char is l Each char is o
  // Each char is   Each char is w Each char is o Each char is r Each char is l Each char is d Each char is !
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India"); // Overwrites the previous value for the key 'IN'

console.log(map);
// Output: Map(3) {"IN" => "India", "USA" => "United States of America", "Fr" => "France"}

// Iterate through each key-value pair of the map using for...of loop
for (const [key, value] of map) {
  console.log(key, ":-", value);
  // Output: IN :- India USA :- United States of America Fr :- France
}

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

// Error: Cannot iterate directly over an object using for...of loop
// To iterate over an object, you need to use Object.entries(), Object.keys(), or Object.values() first

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

