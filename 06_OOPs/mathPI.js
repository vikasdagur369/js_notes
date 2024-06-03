// Getting property descriptor of Math.PI
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

// Accessing Math.PI and trying to modify it (which won't work because it's a read-only property)
console.log(Math.PI); // Output: 3.141592653589793
Math.PI = 5; // Attempt to modify
console.log(Math.PI); // Output: 3.141592653589793 (unchanged)

// Define an object named chai
const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  // Method to order chai
  orderChai: function () {
    console.log("Chai is not made yet");
  },
};

// Getting property descriptor of the "name" property of the chai object
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Redefining the "name" property of the chai object to be enumerable
Object.defineProperty(chai, "name", {
  enumerable: true,
});

// Getting updated property descriptor of the "name" property
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Looping through the properties of the chai object
for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
/*

Explanation:

1. **Getting Property Descriptor**:
   - We use `Object.getOwnPropertyDescriptor()` to get the property descriptor of `Math.PI`.
   - Similarly, we get the property descriptor of the "name" property of the `chai` object.

2. **Accessing and Modifying Properties**:
   - We access and try to modify the read-only property `Math.PI`, which doesn't work.

3. **Defining Properties**:
   - We use `Object.defineProperty()` to define the "name" property of the `chai` object as enumerable.

4. **Looping Through Object Properties**:
   - We loop through the properties of the `chai` object using `Object.entries()` and log the non-function properties. 

This code snippet demonstrates how to get and define property descriptors, access and modify properties, and loop through object properties in JavaScript.
*/