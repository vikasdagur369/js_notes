// Primitive Types

// There are 7 primitive types in JavaScript: String, Number, Boolean, null, undefined, Symbol, and BigInt.

// Defining variables with primitive values:
const score = 100; // A Number type.
const scoreValue = 100.3; // Also a Number type, can represent floating-point values.

const isLoggedIn = false; // A Boolean type indicating whether a user is logged in or not.
const outsideTemp = null; // Represents the absence of a value.
let userEmail; // A variable declared but not initialized, defaulting to undefined.

const id = Symbol("123"); // Creating a unique Symbol.
const anotherId = Symbol("123"); // Creating another unique Symbol.
console.log(id === anotherId); // Output: false, because Symbols with the same description are unique.

// const bigNumber = 3456543576654356754n // BigInt type - this line is commented out.

// Reference Types (Non-primitive)

// Non-primitive types include Array, Objects, and Functions.

const heroes = ["shaktiman", "naagraj", "doga"]; // An Array containing superhero names.
let myObj = {
  // An Object representing a person with name and age properties.
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  // A Function that logs "Hello world" to the console.
  console.log("Hello world");
};

console.log(typeof anotherId); // Output: symbol, indicating the type of the variable anotherId.

// Additional Resource
// Refer to the ECMAScript Language Specification for more details: https://262.ecma-international.org/5.1/#sec-11.4.3
