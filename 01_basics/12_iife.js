// Immediately Invoked Function Expressions (IIFE)

// Define and immediately invoke an anonymous function using function declaration syntax.
(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();

// Define and immediately invoke an anonymous arrow function with a parameter.
((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");
