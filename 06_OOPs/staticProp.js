


// Define the User class
class User {
    constructor(username){
        this.username = username;
    }

    // Method to log the username
    logMe(){
        console.log(`Username: ${this.username}`);
    }

    // Static method to create an ID
    static createId(){
        return `123`;
    }
}

// Create a new User instance named hitesh
const hitesh = new User("hitesh");

// Call the logMe method on hitesh
hitesh.logMe(); // Output: Username: hitesh

// Define the Teacher class, which extends User
class Teacher extends User {
    constructor(username, email){
        super(username); // Call the constructor of the parent class
        this.email = email;
    }
}

// Create a new Teacher instance named iphone
const iphone = new Teacher("iphone", "i@phone.com");

// Call the createId static method on Teacher
console.log(Teacher.createId()); // Output: 123


/*

Explanation:

1. **User Class**:
   - We define a `User` class with a constructor to initialize the `username` property and a method `logMe` to log the username.
   - Additionally, there's a static method `createId` that generates and returns an ID.

2. **Creating User Instance**:
   - We create a new `User` instance named `hitesh` with the username "hitesh".
   - We call the `logMe` method on `hitesh`, which logs the username to the console.

3. **Teacher Class (Inheritance)**:
   - We define a `Teacher` class that extends the `User` class.
   - The constructor of `Teacher` takes `username` and `email` parameters. It calls the constructor of the parent class (`User`) using `super(username)` and sets the `email` property.

4. **Creating Teacher Instance**:
   - We create a new `Teacher` instance named `iphone` with the username "iphone" and email "i@phone.com".

5. **Calling Static Method**:
   - We call the static method `createId` directly on the `Teacher` class, which returns "123".
   */