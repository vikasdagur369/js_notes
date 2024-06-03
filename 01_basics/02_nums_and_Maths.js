const score = 400;
// Declaring a constant variable named 'score' with a value of 400.

const balance = new Number(100);
// Creating a new Number object with a value of 100 and assigning it to the constant variable 'balance'.

// Converting 'balance' to a string and outputting its length.
console.log(balance.toString().length);
// Expected output: 3

// Converting 'balance' to a string with exactly one decimal place.
console.log(balance.toFixed(1));
// Expected output: "100.0"

const otherNumber = 123.8966;
// Declaring a constant variable 'otherNumber' with a value of 123.8966.

// Converting 'otherNumber' to a string with four significant digits.
console.log(otherNumber.toPrecision(4));
// Expected output: "123.9"

const hundreds = 1000000;
// Declaring a constant variable 'hundreds' with a value of 1000000.

// Converting 'hundreds' to a locale-specific string representation using Indian English locale.
console.log(hundreds.toLocaleString("en-IN"));
// Expected output: "10,00,000"

// +++++++++++++ Math Operations +++++++++++++++++++++++++++++

// Returning the built-in Math object.
console.log(Math);

// Returning the absolute value of -4.
console.log(Math.abs(-4));
// Expected output: 4

// Rounding 4.6 to the nearest integer.
console.log(Math.round(4.6));
// Expected output: 5

// Rounding up 4.2 to the nearest integer.
console.log(Math.ceil(4.2));
// Expected output: 5

// Rounding down 4.9 to the nearest integer.
console.log(Math.floor(4.9));
// Expected output: 4

// Returning the minimum value among the given arguments.
console.log(Math.min(4, 3, 6, 8));
// Expected output: 3

// Returning the maximum value among the given arguments.
console.log(Math.max(4, 3, 6, 8));
// Expected output: 8

// Generating a random floating-point number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random());

// Generating a random floating-point number between 1 and 11.
console.log(Math.random() * 10 + 1);

// Generating a random integer between 1 and 10.
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

// Generating a random integer between 10 and 20 (inclusive).
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
