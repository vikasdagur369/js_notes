// Define the User class
class User {
  constructor(username) {
    this.username = username;
  }

  // Method to log the username
  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

// Define the Teacher class, which extends User
class Teacher extends User {
  constructor(username, email, password) {
    super(username); // Call the constructor of the parent class
    // Set email and password properties specific to Teacher
    this.email = email;
    this.password = password;
  }

  // Method specific to Teacher to add a course
  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

// Create a new Teacher instance
const chai = new Teacher("chai", "chai@teacher.com", "123");

// Call the logMe method inherited from User
chai.logMe(); // Output: USERNAME is chai

// Create a new User instance
const masalaChai = new User("masalaChai");

// Call the logMe method for masalaChai
masalaChai.logMe(); // Output: USERNAME is masalaChai

// Check if chai is an instance of User
console.log(chai instanceof User); // Output: true


/* 




Explanation:

1. **Class Definitions**:
   - We have two classes: `User` and `Teacher`.
   - `Teacher` extends `User`, meaning it inherits properties and methods from `User`.

2. **Constructor Functions**:
   - Both classes have constructors to initialize properties. The `Teacher` class calls `super(username)` to invoke the constructor of the `User` class with the `username` parameter.

3. **Methods**:
   - `User` class has a `logMe` method to log the username.
   - `Teacher` class has an additional method `addCourse` to add a new course.

4. **Object Creation**:
   - We create an instance `chai` of the `Teacher` class and call `logMe` method inherited from `User`.
   - We also create an instance `masalaChai` of the `User` class and call `logMe` method.

5. **Instanceof Operator**:
   - We check if `chai` is an instance of `User`, which returns `true` since `Teacher` inherits from `User`.

Overall, this script demonstrates inheritance in classes, method inheritance, and object creation in JavaScript classes.

*/