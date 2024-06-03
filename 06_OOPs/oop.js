// Object literal
const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  // Method to get user details
  getUserDetails: function () {
    console.log(this);
  },
};

// Function Constructor
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  // Method to greet the user
  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  // Return the constructed object (implicitly)
  return this;
}

// Create instances of User
const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);

// Output the constructor of userOne
console.log(userOne.constructor); // Output: [Function: User]

/*  Explanation:

1. **Object Literal**:
   - We define an object `user` with properties `username`, `loginCount`, and `signedIn`.
   - It has a method `getUserDetails` to log the object itself (`this`).

2. **Function Constructor**:
   - We define a function `User` which acts as a constructor for user objects.
   - It takes parameters `username`, `loginCount`, and `isLoggedIn` and assigns them to properties of the constructed object.
   - It has a method `greeting` to greet the user with their username.
   - `return this;` at the end of the constructor function is implicit and returns the constructed object.

3. **Creating Instances**:
   - We create two instances `userOne` and `userTwo` of the `User` constructor with different parameters.

4. **Output**:
   - We output the constructor of `userOne`, which should show `[Function: User]`, indicating that `userOne` was constructed using the `User` constructor function.
   */
