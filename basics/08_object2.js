// Creating an empty object using object literal syntax
const tinderUser = {};

// Adding properties to the tinderUser object
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// Creating a nested object
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hitesh",
      lastname: "choudhary",
    },
  },
};

// Accessing nested properties
// console.log(regularUser.fullname.userfullname.firstname);

// Merging objects using spread operator
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

const obj3 = { ...obj1, ...obj2 }; // Merging obj1 and obj2 into obj3
// console.log(obj3);

// Accessing a property of an object in an array
const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];

users[1].email; // Accessing the email property of the second object in the users array

// Destructuring assignment
const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// Extracting the courseInstructor property using destructuring
const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
console.log(instructor); // Output: "hitesh"
