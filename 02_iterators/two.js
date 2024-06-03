const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

// Iterate through each property of the object using for...in loop
for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
  // Output: js shortcut is for javascript
  //         cpp shortcut is for C++
  //         rb shortcut is for ruby
  //         swift shortcut is for swift by apple
}

const programming = ["js", "rb", "py", "java", "cpp"];

// Iterate through each index of the array using for...in loop
for (const key in programming) {
  console.log(programming[key]);
  // Output: js rb py java cpp (Each element on a new line)
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

// Output will be dependent on the browser's implementation of Map's iteration.
// In some environments, it might not log anything as for...in loop may not work with Map objects.
