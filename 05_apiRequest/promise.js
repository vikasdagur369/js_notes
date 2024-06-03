// Promise to execute an asynchronous task after 1 second
const promiseOne = new Promise(function (resolve, reject) {
  // Simulating an asynchronous task
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

// Consuming promiseOne
promiseOne.then(function () {
  console.log("Promise consumed");
});

// Another promise for async task after 1 second
new Promise(function (resolve, reject) {
  // Simulating another asynchronous task
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

// Promise returning user object after 1 second
const promiseThree = new Promise(function (resolve, reject) {
  // Simulating an asynchronous task that returns data
  setTimeout(function () {
    resolve({ username: "Chai", email: "chai@example.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

// Promise returning user object if no error, else reject with error
const promiseFour = new Promise(function (resolve, reject) {
  // Simulating an asynchronous task that may fail
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "hitesh", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

// Another promise similar to promiseFour but with async/await syntax
const promiseFive = new Promise(function (resolve, reject) {
  // Simulating an asynchronous task that may fail
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

// Function to consume promiseFive using async/await syntax
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// Fetching data from an API using fetch API
fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

/* 
Expected Output:
Async task is complete
Promise consumed
Async task 2
Async 2 resolved
{username: "Chai", email: "chai@example.com"}
{username: "hitesh", password: "123"}
hitesh
ERROR: Something went wrong
The promise is either resolved or rejected
{username: "javascript", password: "123"}
{
  
}
*/

/* 

Promise Creation: Promises are used to handle asynchronous operations. The code begins by creating promises to simulate async tasks. For instance, promiseOne simulates an async task that completes after 1 second.

Promise Consumption: Once the async task is complete, you can use .then() to handle the result. In our case, after promiseOne resolves, it logs "Promise consumed".

Chaining Promises: Promises can be chained using .then(). For example, after the second async task (promiseThree), it logs the user object. Then, with promiseFour, it logs the user and then the username.

Error Handling: Promises also allow error handling with .catch(). In promiseFour, if there's an error (like error = true), it rejects the promise and logs the error message.

Finally Block: .finally() executes code regardless of whether the promise is resolved or rejected. Here, it logs a message indicating the promise's resolution status.

Async/Await: consumePromiseFive() demonstrates async/await syntax, which provides a cleaner way to work with promises. It waits for promiseFive to resolve and then logs the response.

Fetching Data: It fetches data from the GitHub API using the fetch API, which is a modern way to make network requests in JavaScript. It fetches data about a GitHub user and logs it.

*/
