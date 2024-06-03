// STRING-----------------------------
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

//NUMS AND MATHS-------------------------

const score = 400;
// Declaring a constant variable named 'score' with a value of 400.

const balance = new Number(100);
// Creating a new Number object with a value of 100 and assigning it to the constant variable 'balance'.

// Converting 'balance' to a string and outputting its length.
console.log(balance.toString().length);
// Expected output: 3

// Converting 'balance' to a string with exactly one decimal place.
console.log(balance.toFixed(1));
// Expected output: "100.0"

const otherNumber = 123.8966;
// Declaring a constant variable 'otherNumber' with a value of 123.8966.

// Converting 'otherNumber' to a string with four significant digits.
console.log(otherNumber.toPrecision(4));
// Expected output: "123.9"

const hundreds = 1000000;
// Declaring a constant variable 'hundreds' with a value of 1000000.

// Converting 'hundreds' to a locale-specific string representation using Indian English locale.
console.log(hundreds.toLocaleString("en-IN"));
// Expected output: "10,00,000"

// +++++++++++++ Math Operations +++++++++++++++++++++++++++++

// Returning the built-in Math object.
console.log(Math);

// Returning the absolute value of -4.
console.log(Math.abs(-4));
// Expected output: 4

// Rounding 4.6 to the nearest integer.
console.log(Math.round(4.6));
// Expected output: 5

// Rounding up 4.2 to the nearest integer.
console.log(Math.ceil(4.2));
// Expected output: 5

// Rounding down 4.9 to the nearest integer.
console.log(Math.floor(4.9));
// Expected output: 4

// Returning the minimum value among the given arguments.
console.log(Math.min(4, 3, 6, 8));
// Expected output: 3

// Returning the maximum value among the given arguments.
console.log(Math.max(4, 3, 6, 8));
// Expected output: 8

// Generating a random floating-point number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random());

// Generating a random floating-point number between 1 and 11.
console.log(Math.random() * 10 + 1);

// Generating a random integer between 1 and 10.
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

// Generating a random integer between 10 and 20 (inclusive).
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// DATE & TIME-------------------------

// Dates

// Creating a new Date object representing the current date and time.
let myDate = new Date();
console.log(myDate); // Output: Current date and time in your local timezone.

// Various methods to retrieve different representations of the date:
console.log(myDate.toString()); // Output: String representation of the current date and time.
console.log(myDate.toDateString()); // Output: String representation of the current date.
console.log(myDate.toLocaleString()); // Output: Localized string representation of the current date and time.
console.log(typeof myDate); // Output: 'object', indicating that myDate is of type object.

// Creating a new Date object with specified date and time:
Parameters: year, monthIndex, day, hours, minutes, seconds, milliseconds;
let myCreatedDate = new Date(2023, 0, 23);
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3);
let myCreatedDate2 = new Date("2023-01-14");
let myCreatedDate3 = new Date("01-14-2023"); // Note: This format might cause issues due to regional differences.
console.log(myCreatedDate.toLocaleString()); // Output: Localized string representation of the specified date and time.

// Obtaining the current timestamp in milliseconds since the Unix Epoch.
let myTimeStamp = Date.now();
console.log(myTimeStamp); // Output: Current timestamp in milliseconds.

// Additional operations with dates:
console.log(myCreatedDate.getTime()); // Output: Time value of the specified date in milliseconds since the Unix Epoch.
console.log(Math.floor(Date.now() / 1000)); // Output: Current timestamp in seconds since the Unix Epoch, rounded down.

// Creating a new Date object representing the current date and time.
let newDate = new Date();
console.log(newDate); // Output: Current date and time in your local timezone.
console.log(newDate.getMonth() + 1); // Output: Current month (1-12, January is 1).
console.log(newDate.getDay()); // Output: Current day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday).

// Using toLocaleString() to get the full name of the current weekday:
newDate.toLocaleString("default", {
  weekday: "long", // Specifies that we want the full name of the weekday.
});

//DATATYPES-

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

// ARRAYS-------------------------------------

// Array Operations

// Defining arrays with different elements:
const myArr = [0, 1, 2, 3, 4, 5]; // An array of numbers.
const myHeroes = ["shaktiman", "naagraj"]; // An array of strings representing superhero names.

// Another way to create an array using the Array constructor:
const myArr2 = new Array(1, 2, 3, 4); // Creates an array with elements 1, 2, 3, 4.

// Accessing elements of an array:
console.log(myArr[1]); // Output: 1, accessing the element at index 1.

// Array Methods

//Methods for modifying arrays:
myArr.push(6); // Adds element 6 to the end of the array.
myArr.push(7); // Adds element 7 to the end of the array.
myArr.pop(); // Removes the last element from the array.

myArr.unshift(9); // Adds element 9 to the beginning of the array.
myArr.shift(); // Removes the first element from the array.

// Checking for values in the array:
console.log(myArr.includes(9)); // Output: true, checks if the array includes the value 9.
console.log(myArr.indexOf(3)); // Output: 3, returns the index of the first occurrence of value 3.

// Converting an array to a string:
const newArr = myArr.join(); // Joins all elements of the array into a string with a comma separator.
console.log(newArr);

// slice and splice methods

console.log("A ", myArr); // Output: The original array.

// slice method - does not modify the original array
const myNew1 = myArr.slice(1, 3); // Creates a new array containing elements from index 1 to index 2 (exclusive).
console.log(myNew1); // Output: [1, 2]
console.log("B ", myArr); // Output: The original array remains unchanged.

// splice method - modifies the original array
const myNew2 = myArr.splice(1, 3); // Removes elements starting from index 1 up to 3 elements.
console.log("C ", myArr); // Output: The original array after splice operation.
console.log(myNew2); // Output: [1, 2, 3], the removed elements.

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// Pushing an array into another array
marvel_heros.push(dc_heros); // Pushes the dc_heros array as a single element into marvel_heros.
console.log(marvel_heros); // Output: ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
console.log(marvel_heros[3][1]); // Output: "flash", accessing the second hero in the nested array.

// Concatenating arrays using concat method
const allHeros = marvel_heros.concat(dc_heros); // Concatenates two arrays.
console.log(allHeros); // Output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// Merging arrays using spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]; // Merges two arrays using the spread operator.
console.log(all_new_heros); // Output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// Flattening a nested array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity); // Flattens the nested array.
console.log(real_another_array); // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// Checking if a value is an array
console.log(Array.isArray("Hitesh")); // Output: false, "Hitesh" is not an array.
console.log(Array.from("Hitesh")); // Output: ["H", "i", "t", "e", "s", "h"], converts a string to an array of characters.
console.log(Array.from({ name: "hitesh" })); // Output: [], creates an empty array because the object is not iterable.

// Creating an array from individual values
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // Output: [100, 200, 300], creates an array from individual values.

// OBJECTS -----------------------------------------

// Singleton & Object.create

// Creating a symbol to use as a unique key
const mySym = Symbol("key1");

// Creating an object using object literals
const JsUser = {
  name: "Hitesh", // Property: name
  "full name": "Hitesh Choudhary", // Property with a space in the key
  [mySym]: "mykey1", // Dynamic property name using a symbol
  age: 18, // Property: age
  location: "Jaipur", // Property: location
  email: "hitesh@google.com", // Property: email
  isLoggedIn: false, // Property: isLoggedIn
  lastLoginDays: ["Monday", "Saturday"], // Property: lastLoginDays (an array)
};

// Accessing object properties using dot notation and bracket notation
console.log(JsUser.email); // Output: "hitesh@google.com"
console.log(JsUser["email"]); // Output: "hitesh@google.com"
console.log(JsUser["full name"]); // Output: "Hitesh Choudhary"
console.log(JsUser[mySym]); // Output: "mykey1"

// Modifying object properties
JsUser.email = "hitesh@chatgpt.com"; // Modifying the value of the email property
Object.freeze(JsUser); // Freezing the object to prevent further modifications
JsUser.email = "hitesh@microsoft.com"; // Attempting to modify the email property after freezing
console.log(JsUser); // Output: The email property remains "hitesh@chatgpt.com" because the object is frozen

// Adding methods to the object
JsUser.greeting = function () {
  // Adding a greeting method to the object
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  // Adding another greeting method that uses the name property
  console.log(`Hello JS user, ${this.name}`);
};

// Invoking the methods
console.log(JsUser.greeting()); // Output: "Hello JS user"
console.log(JsUser.greetingTwo()); // Output: "Hello JS user, Hitesh"

// Creating an empty object using object literal syntax
const tinderUser = {};

// Adding properties to the tinderUser object
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// Creating a nested object
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hitesh",
      lastname: "choudhary",
    },
  },
};

// Accessing nested properties
// console.log(regularUser.fullname.userfullname.firstname);

// Merging objects using spread operator
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

const obj3 = { ...obj1, ...obj2 }; // Merging obj1 and obj2 into obj3
// console.log(obj3);

// Accessing a property of an object in an array
const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];

users[1].email; // Accessing the email property of the second object in the users array

// Destructuring assignment
const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// Extracting the courseInstructor property using destructuring
const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
console.log(instructor); // Output: "hitesh"

// FUNCTIONS---------

// Defining a function that logs individual characters of "Hitesh" to the console
function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// Function invocation
sayMyName();

// Defining a function to add two numbers and return the result
function addTwoNumbers(number1, number2) {
  return number1 + number2; // Returning the sum of number1 and number2
}

// Invoking the function and storing the result
const result = addTwoNumbers(3, 5);

// Logging the result to the console
console.log("Result: ", result);

// Defining a function with a default parameter value
function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// Defining a function with a rest parameter
function calculateCartPrice(val1, val2, ...num1) {
  return num1; // Returning the rest parameter as an array
}

// Logging the result of the function with different arguments
console.log(calculateCartPrice(200, 400, 500, 2000));

// Defining a function that handles an object parameter
const user = {
  username: "hitesh",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// Invoking the function with an object argument
// handleObject(user);
handleObject({
  username: "sam",
  price: 399,
});

// Defining a function to return the second value of an array
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1]; // Returning the second element of the array
}

// Logging the result of the function with different arrays
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

//SCOPING--------

let a = 300;
if (true) {
  let a = 10; // This 'a' variable is scoped to this block only
  const b = 20; // This 'b' variable is scoped to this block only
  console.log("INNER: ", a); // This will log the value of the 'a' variable in this block
}

console.log(a); // This will log the value of the 'a' variable outside the block
console.log(b); // 'b' is not accessible here since it's scoped to the block
console.log(c); // 'c' is accessible here if uncommented

function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username); // 'username' is accessible here
  }
  // console.log(website); // 'website' is not accessible here
  two(); // This will invoke the 'two' function
}

// one(); // This will invoke the 'one' function

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = "youtube";
    console.log(username + website); // This will log "hitesh youtube"
  }
  console.log(website); // 'website' is not accessible here
}

console.log(username); // 'username' is not accessible here

console.log(addone(5)); // This will log 6

function addone(num) {
  return num + 1; // This function is declared using function declaration syntax
}

addTwo(5); // This will result in a ReferenceError since 'addTwo' is not accessible here

const addTwo = function (num) {
  return num + 2; // This function is declared using a function expression
};

// ARROW - -----

// Define an object named user with properties: username and price, and a method named welcomeMessage.
const user = {
  username: "hitesh",
  price: 999,

  // Method welcomeMessage logs a welcome message including the username and the 'this' context.
  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// Call welcomeMessage method of user object and output the result.
user.welcomeMessage(); // Output: "hitesh , welcome to website" and the user object

// Change the value of username property of user object to "sam".
user.username = "sam";

// Call welcomeMessage method of user object again after changing the username property.
user.welcomeMessage(); // Output: "sam , welcome to website" and the user object

// Define a function chai using function declaration syntax.
function chai() {
  let username = "hitesh";
  console.log(this.username);
}

// Call chai function.
chai(); // Output: undefined

// Define a function chai using function expression syntax.
const chai1 = function () {
  let username = "hitesh";
  console.log(this.username);
};

// Define a function chai using arrow function syntax.
const chai = () => {
  let username = "hitesh";
  console.log(this); // Output: window/global object
};

// Call chai function.
chai(); // Output: window/global object

// Define a function addTwo using arrow function syntax that returns an object with a username property.
const addTwo = (num1, num2) => ({ username: "hitesh" });

// Call addTwo function with arguments 3 and 4.
console.log(addTwo(3, 4)); // Output: { username: "hitesh" }

// Define an array named myArray.
const myArray = [2, 5, 3, 7, 8];

// Iterate over each element of myArray using forEach method.
myArray.forEach();

// IIFE--------------

// Immediately Invoked Function Expressions (IIFE)

// Define and immediately invoke an anonymous function using function declaration syntax.
(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();

// Define and immediately invoke an anonymous arrow function with a parameter.
((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");

// TRUTHY--

const userEmail = [];

if (userEmail) {
  console.log("Got user email"); // Output: "Got user email" (since userEmail is an empty array, which is truthy)
} else {
  console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty"); // Output: "Object is empty" (since emptyObj has no keys, indicating it's empty)
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10; // Output: 5 (because 5 is not null or undefined)
// val1 = null ?? 10; // Output: 10 (because null is null)
// val1 = undefined ?? 15; // Output: 15 (because undefined is undefined)
val1 = null ?? 10 ?? 20; // Output: 10 (null is null, so it moves to the next value which is 10)

console.log(val1); // Output: 10

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80"); // Output: "more than 80" (since 100 is more than 80)
