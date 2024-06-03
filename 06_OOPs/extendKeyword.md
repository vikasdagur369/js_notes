In JavaScript, the `extends` keyword is used in classes to establish a relationship known as inheritance. When one class extends another, it means that the extending class (subclass) inherits properties and methods from the extended class (superclass). Here's a breakdown of how it works:

1. **Defining Superclass (Parent Class)**:
   - The superclass is the class that is being extended.
   - It contains properties and methods that can be shared among multiple subclasses.
   - Example: `class User { ... }`

2. **Defining Subclass (Child Class)**:
   - The subclass is the class that extends the superclass.
   - It inherits properties and methods from the superclass and can also have its own unique properties and methods.
   - Example: `class Teacher extends User { ... }`

3. **Syntax**:
   - The `extends` keyword is used in the class declaration to specify the superclass that the subclass inherits from.
   - Inside the subclass's constructor, `super()` is called to invoke the constructor of the superclass and initialize inherited properties.
   - Example:
     ```javascript
     class Teacher extends User {
         constructor(username, email){
             super(username); // Call superclass constructor
             this.email = email;
         }
     }
     ```

4. **Inheritance**:
   - Once a subclass extends a superclass, it automatically inherits all properties and methods from the superclass.
   - The subclass can override methods of the superclass by defining its own implementation of those methods.
   - The subclass can also add new properties and methods of its own.
   - Example:
     ```javascript
     class Teacher extends User {
         // Constructor inheriting username property from User
         constructor(username, email){
             super(username); // Call superclass constructor
             this.email = email; // Additional property specific to Teacher
         }

         // Method specific to Teacher
         greet(){
             console.log(`Hello, I am ${this.username}`);
         }
     }
     

5. **Usage**:
   - Inheritance allows for code reuse and promotes a hierarchical structure among classes.
   - It helps in organizing code by grouping related functionality into separate classes.
   - Subclasses can leverage the functionality of the superclass and customize it as needed.

In summary, the `extends` keyword facilitates the creation of class hierarchies in JavaScript, enabling subclass objects to inherit properties and methods from superclass objects, thereby promoting code reusability and maintainability.