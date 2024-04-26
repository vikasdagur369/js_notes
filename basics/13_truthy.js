const userEmail = [];

if (userEmail) {
  console.log("Got user email"); // Output: "Got user email" (since userEmail is an empty array, which is truthy)
} else {
  console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty"); // Output: "Object is empty" (since emptyObj has no keys, indicating it's empty)
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10; // Output: 5 (because 5 is not null or undefined)
// val1 = null ?? 10; // Output: 10 (because null is null)
// val1 = undefined ?? 15; // Output: 15 (because undefined is undefined)
val1 = null ?? 10 ?? 20; // Output: 10 (null is null, so it moves to the next value which is 10)

console.log(val1); // Output: 10

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80"); // Output: "more than 80" (since 100 is more than 80)
