const coding = ["js", "ruby", "java", "python", "cpp"];

// Iterate through each element of the array using forEach method with anonymous function
// coding.forEach( function (val){
//     console.log(val);
// } )

// Iterate through each element of the array using forEach method with arrow function
// coding.forEach( (item) => {
//     console.log(item);
// } )

// Define a named function for reuse
// function printMe(item){
//     console.log(item);
// }

// Iterate through each element of the array using forEach method with a named function
// coding.forEach(printMe)

// Iterate through each element of the array using forEach method with arrow function,
// providing access to index and the array itself
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

// Iterate through each object in the array and log the languageName property using forEach method with arrow function
myCoding.forEach((item) => {
  console.log(item.languageName);
  // Output: javascript java python (Each language name on a new line)
});
