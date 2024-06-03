// Define the User class
class User {
  // Constructor to initialize email and password properties
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  // Getter for email property
  get email() {
    // Converts email to uppercase and returns
    return this._email.toUpperCase();
  }

  // Setter for email property
  set email(value) {
    // Assigns the email value to _email property
    this._email = value;
  }

  // Getter for password property
  get password() {
    // Appends "hitesh" to the password and returns
    return `${this._password}hitesh`;
  }

  // Setter for password property
  set password(value) {
    // Assigns the password value to _password property
    this._password = value;
  }
}

// Create a new User instance
const hitesh = new User("h@hitesh.ai", "abc");

// Log the email property of hitesh
console.log(hitesh.email);

//This code defines a `User` class with a constructor, getter, and setter methods for `email` and `password` properties. Let's break it down:


// Define the User class
class User {
    // Constructor to initialize email and password properties
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    // Getter for email property
    get email(){
        // Converts email to uppercase and returns
        return this._email.toUpperCase();
    }

    // Setter for email property
    set email(value){
        // Assigns the email value to _email property
        this._email = value;
    }

    // Getter for password property
    get password(){
        // Appends "hitesh" to the password and returns
        return `${this._password}hitesh`;
    }

    // Setter for password property
    set password(value){
        // Assigns the password value to _password property
        this._password = value;
    }
}

// Create a new User instance
const hitesh1 = new User("h@hitesh.ai", "abc");

// Log the email property of hitesh
console.log(hitesh.email);


/* Explanation:

1. **Class Definition**:
   - We define a `User` class with a constructor and getter/setter methods for `email` and `password` properties.

2. **Constructor**:
   - The constructor initializes the `email` and `password` properties using the arguments passed during object creation.

3. **Getter and Setter for Email**:
   - The `email` property is defined with a getter and setter. 
   - The getter returns the email in uppercase using `toUpperCase()`.
   - The setter assigns the value to `_email` property.

4. **Getter and Setter for Password**:
   - Similarly, the `password` property is defined with a getter and setter.
   - The getter appends "hitesh" to the password.
   - The setter assigns the value to `_password` property.

5. **Object Creation**:
   - We create a new `User` object named `hitesh` with an email "h@hitesh.ai" and password "abc".

6. **Output**:
   - We log the `email` property of `hitesh` object to the console, which returns the uppercase version of the email ("H@HITESH.AI").
*/