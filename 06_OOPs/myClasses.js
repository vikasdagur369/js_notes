// ES6 class definition
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  // Method to encrypt password
  encryptPassword() {
    return `${this.password}abc`;
  }

  // Method to change username to uppercase
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

// Create an instance of User using ES6 class
const chai = new User("chai", "chai@gmail.com", "123");

// Call methods on the instance
console.log(chai.encryptPassword()); // Output: 123abc
console.log(chai.changeUsername()); // Output: CHAI

// Behind the scenes, this ES6 class can be implemented using traditional prototype-based JavaScript like this:
// Equivalent functionality using prototype-based JavaScript

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

// Method to encrypt password using prototype
User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

// Method to change username to uppercase using prototype
User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

// Create an instance of User using prototype-based JavaScript
const tea = new User("tea", "tea@gmail.com", "123");

// Call methods on the instance
console.log(tea.encryptPassword()); // Output: 123abc
console.log(tea.changeUsername()); // Output: TEA

/*
Certainly! Let's simplify it:

1. **Using ES6 Class Syntax**:
   - We define a class named `User` using modern ES6 syntax.
   - The `constructor` method is a special method that runs automatically when we create a new `User` object. It initializes the properties `username`, `email`, and `password` with the values we pass when creating a new user.
   - We have two additional methods in the class: `encryptPassword` and `changeUsername`.
   - `encryptPassword` adds "abc" to the end of the password and returns the encrypted password.
   - `changeUsername` converts the username to uppercase and returns it.

2. **Creating User Objects**:
   - We create a new `User` object named `chai` with the username "chai", email "chai@gmail.com", and password "123".
   - We call the `encryptPassword` and `changeUsername` methods on the `chai` object and log the results.

3. **Equivalent Functionality Using Prototypes**:
   - We demonstrate how the same functionality can be achieved using traditional prototype-based JavaScript.
   - We define a constructor function `User` and add methods (`encryptPassword` and `changeUsername`) to its prototype.

4. **Creating User Objects (Prototype-Based)**:
   - We create a new `User` object named `tea` using the constructor function.
   - We call the `encryptPassword` and `changeUsername` methods on the `tea` object and log the results.

In summary, both approaches achieve the same result: creating user objects with properties and methods to encrypt passwords and change usernames. ES6 classes provide a cleaner and more structured way to define classes and methods compared to traditional prototype-based JavaScript.

*/
