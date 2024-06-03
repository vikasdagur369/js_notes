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
