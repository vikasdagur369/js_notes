const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// Pushing an array into another array
marvel_heros.push(dc_heros); // Pushes the dc_heros array as a single element into marvel_heros.
console.log(marvel_heros); // Output: ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
console.log(marvel_heros[3][1]); // Output: "flash", accessing the second hero in the nested array.

// Concatenating arrays using concat method
const allHeros = marvel_heros.concat(dc_heros); // Concatenates two arrays.
console.log(allHeros); // Output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// Merging arrays using spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]; // Merges two arrays using the spread operator.
 console.log(all_new_heros); // Output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// Flattening a nested array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity); // Flattens the nested array.
console.log(real_another_array); // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// Checking if a value is an array
console.log(Array.isArray("Hitesh")); // Output: false, "Hitesh" is not an array.
console.log(Array.from("Hitesh")); // Output: ["H", "i", "t", "e", "s", "h"], converts a string to an array of characters.
console.log(Array.from({ name: "hitesh" })); // Output: [], creates an empty array because the object is not iterable.

// Creating an array from individual values
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // Output: [100, 200, 300], creates an array from individual values.
