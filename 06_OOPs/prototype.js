let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

// Adding a custom method to the Object prototype
Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all objects`);
};

// Adding a custom method to the Array prototype
Array.prototype.heyHitesh = function () {
  console.log(`Hitesh says hello`);
};

// Accessing custom methods
myHeros.heyHitesh(); // Output: Hitesh says hello

// Demonstrating custom method on the Object prototype
heroPower.hitesh(); // Output: hitesh is present in all objects

// Demonstrating custom method on the Array prototype
myHeros.hitesh(); // Output: hitesh is present in all objects

// Inheritance

// Define base objects
const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

// Creating an object with inheritance using __proto__
const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

// Setting prototype using modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

// Accessing properties from prototypes
console.log(TASupport.name); // Output: chai
console.log(TASupport.makeVideo); // Output: true
console.log(TASupport.isAvailable); // Output: false

// Adding a custom method to the String prototype
let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

// Accessing the custom method
anotherUsername.trueLength(); // Output: True length is: 11
"hitesh".trueLength(); // Output: True length is: 6
"iceTea".trueLength(); // Output: True length is: 6




/*

Absolutely, let's simplify this:

1. **Custom Methods for Arrays and Objects**:
   - We create an array called `myHeros` which stores some superhero names.
   - Then, we have an object `heroPower` which describes the powers of superheroes.
   - We add custom methods (`heyHitesh` and `hitesh`) to the prototype of arrays and objects, which means every array and object can use these methods.

2. **Inheritance**:
   - We define some basic objects: `User`, `Teacher`, `TeachingSupport`.
   - Then, we create an object `TASupport` which is supposed to be a Teaching Assistant (TA) support object. It inherits properties from both `Teacher` and `TeachingSupport`.
   - In JavaScript, we can make one object inherit from another using `__proto__` or `Object.setPrototypeOf()`.

3. **Custom Method for Strings**:
   - We define a string variable `anotherUsername`.
   - We add a custom method (`trueLength`) to the prototype of strings.
   - This method trims the string (removes extra spaces from the beginning and end) and calculates its true length (the length after trimming).

4. **Output**:
   - We call the custom methods (`heyHitesh` and `trueLength`) on arrays, objects, and strings to demonstrate how they work.

So, this script showcases how we can add new functionalities to built-in JavaScript objects and how objects can inherit properties from each other.


*/