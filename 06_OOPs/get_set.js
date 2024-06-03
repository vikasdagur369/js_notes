// Object Literal Approach
const User = {
  _email: "h@hc.com",
  _password: "abc",

  // Getter method for email property
  get email() {
    return this._email.toUpperCase();
  },

  // Setter method for email property
  set email(value) {
    this._email = value;
  },
};

// Create a new object tea inheriting from User
const tea = Object.create(User);

// Access and log the email property of tea
console.log(tea.email); // Output: H@HC.COM

// Constructor Function Approach
function User(email, password) {
  this._email = email;
  this._password = password;

  // Define getter and setter methods for email property
  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });

  // Define getter and setter methods for password property
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
}

// Create a new User object chai
const chai = new User("chai@chai.com", "chai");

// Access and log the email property of chai
console.log(chai.email); // Output: CHAI@CHAI.COM

/*


Explanation:

1. **Object Literal Approach**:
   - We define an object named `User` with properties `_email` and `_password`.
   - Getter and setter methods for the `email` property are defined directly within the object literal.
   - We create a new object `tea` using `Object.create(User)` which inherits properties and methods from the `User` object.
   - We access and log the `email` property of the `tea` object, which returns the uppercase version of the `_email` property.

2. **Constructor Function Approach**:
   - We define a constructor function `User` with parameters `email` and `password`.
   - Inside the constructor, we define getter and setter methods for the `email` and `password` properties using `Object.defineProperty()`.
   - We create a new `User` object named `chai` using the constructor function, passing "chai@chai.com" as the email and "chai" as the password.
   - We access and log the `email` property of the `chai` object, which returns the uppercase version of the `_email` property.

Both approaches achieve the same result: creating objects with properties `_email` and `_password`, and providing getter and setter methods for accessing and modifying the `email` property. However, the second approach using constructor functions and `Object.defineProperty()` provides more flexibility and control over property access.
*/

/*
     

In this code snippet, we're exploring two different approaches to achieve similar functionality: one using object literals with getter and setter methods, and the other using constructor functions with getter and setter methods defined via `Object.defineProperty()`. Let's break it down:

1. **Object Literal Approach**:
   - We define an object named `User` with properties `_email` and `_password`.
   - We define getter and setter methods for the `email` property directly within the object literal.
   - We create a new object `tea` using `Object.create(User)` which inherits properties and methods from the `User` object.
   - We access the `email` property of the `tea` object, which returns the uppercase version of the `_email` property.

2. **Constructor Function Approach**:
   - We define a constructor function named `User` with parameters `email` and `password`.
   - Inside the constructor, we define getter and setter methods for the `email` and `password` properties using `Object.defineProperty()`.
   - We create a new `User` object named `chai` using the constructor function, passing "chai@chai.com" as the email and "chai" as the password.
   - We access the `email` property of the `chai` object, which returns the uppercase version of the `_email` property.

Both approaches achieve the same result: creating objects with properties `_email` and `_password`, and providing getter and setter methods for accessing and modifying the `email` property. However, the second approach using constructor functions and `Object.defineProperty()` provides more flexibility and control over property access.


*/
