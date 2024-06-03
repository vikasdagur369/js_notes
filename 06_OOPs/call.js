// Define a function to set the username
function SetUsername(username) {
  // Simulating complex DB calls
  // Set the username property of the object
  this.username = username;
  // Log that the function has been called
  console.log("SetUsername function called");
}

// Define a function to create a user object
function createUser(username, email, password) {
  // Call SetUsername function with 'this' context of createUser
  SetUsername.call(this, username);
  // Set email and password properties
  this.email = email;
  this.password = password;
}

// Create a new user object using createUser constructor
const chai = new createUser("chai", "chai@fb.com", "123");

// Log the user object to the console
console.log(chai);

/* 
Expected Output:
SetUsername function called
{
  username: 'chai',
  email: 'chai@fb.com',
  password: '123'
}
*/


/* 
This script demonstrates how to use the `call` method to borrow functionality from one function and apply it to another function. Let's break it down:

1. **Function Declarations**:
   - We have two function declarations: `SetUsername` and `createUser`.
   - `SetUsername` is a function that presumably performs complex database calls and sets the `username` property of the object it's called with.
   - `createUser` is a function that takes `username`, `email`, and `password` as parameters. It calls `SetUsername` to set the `username` property and then sets the `email` and `password` properties.

2. **Using `call`**:
   - In the `createUser` function, `SetUsername.call(this, username)` is used. This line calls the `SetUsername` function, but it sets the value of `this` inside `SetUsername` to the same value of `this` in the context of `createUser`. This ensures that `this.username` inside `SetUsername` refers to the `username` property of the object being created by `createUser`.

3. **Object Creation**:
   - We create a new object `chai` using the `createUser` constructor function. We pass "chai", "chai@fb.com", and "123" as arguments.
   - Inside `createUser`, `SetUsername` is called with "chai" as the `username` argument, effectively setting `chai.username` to "chai".

4. **Output**:
   - Finally, we log the `chai` object to the console, which includes the `username`, `email`, and `password` properties.

So, in essence, this script demonstrates how to set properties on an object using a separate function (`SetUsername`) by borrowing its functionality within another function (`createUser`) using `call`. This can be useful for reusing code and maintaining clean function definitions.


*/