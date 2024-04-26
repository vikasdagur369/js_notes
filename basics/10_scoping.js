let a = 300;
if (true) {
  let a = 10; // This 'a' variable is scoped to this block only
  const b = 20; // This 'b' variable is scoped to this block only
  console.log("INNER: ", a); // This will log the value of the 'a' variable in this block
}

console.log(a); // This will log the value of the 'a' variable outside the block
console.log(b); // 'b' is not accessible here since it's scoped to the block
console.log(c); // 'c' is accessible here if uncommented

function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username); // 'username' is accessible here
  }
  // console.log(website); // 'website' is not accessible here
  two(); // This will invoke the 'two' function
}

// one(); // This will invoke the 'one' function

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = "youtube";
    console.log(username + website); // This will log "hitesh youtube"
  }
  console.log(website); // 'website' is not accessible here
}

console.log(username); // 'username' is not accessible here

console.log(addone(5)); // This will log 6

function addone(num) {
  return num + 1; // This function is declared using function declaration syntax
}

addTwo(5); // This will result in a ReferenceError since 'addTwo' is not accessible here

const addTwo = function (num) {
  return num + 2; // This function is declared using a function expression
};
