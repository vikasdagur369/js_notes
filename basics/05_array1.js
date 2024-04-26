// Array Operations

// Defining arrays with different elements:
const myArr = [0, 1, 2, 3, 4, 5]; // An array of numbers.
const myHeroes = ["shaktiman", "naagraj"]; // An array of strings representing superhero names.

// Another way to create an array using the Array constructor:
const myArr2 = new Array(1, 2, 3, 4); // Creates an array with elements 1, 2, 3, 4.

// Accessing elements of an array:
console.log(myArr[1]); // Output: 1, accessing the element at index 1.

// Array Methods

//Methods for modifying arrays:
myArr.push(6); // Adds element 6 to the end of the array.
myArr.push(7); // Adds element 7 to the end of the array.
myArr.pop(); // Removes the last element from the array.

myArr.unshift(9); // Adds element 9 to the beginning of the array.
myArr.shift(); // Removes the first element from the array.

// Checking for values in the array:
console.log(myArr.includes(9)); // Output: true, checks if the array includes the value 9.
console.log(myArr.indexOf(3)); // Output: 3, returns the index of the first occurrence of value 3.

// Converting an array to a string:
const newArr = myArr.join(); // Joins all elements of the array into a string with a comma separator.
console.log(newArr);

// slice and splice methods

console.log("A ", myArr); // Output: The original array.

// slice method - does not modify the original array
const myNew1 = myArr.slice(1, 3); // Creates a new array containing elements from index 1 to index 2 (exclusive).
console.log(myNew1); // Output: [1, 2]
console.log("B ", myArr); // Output: The original array remains unchanged.

// splice method - modifies the original array
const myNew2 = myArr.splice(1, 3); // Removes elements starting from index 1 up to 3 elements.
console.log("C ", myArr); // Output: The original array after splice operation.
console.log(myNew2); // Output: [1, 2, 3], the removed elements.
