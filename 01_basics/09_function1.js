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
