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
