// Dates

// Creating a new Date object representing the current date and time.
let myDate = new Date();
console.log(myDate); // Output: Current date and time in your local timezone.

// Various methods to retrieve different representations of the date:
console.log(myDate.toString()); // Output: String representation of the current date and time.
console.log(myDate.toDateString()); // Output: String representation of the current date.
console.log(myDate.toLocaleString()); // Output: Localized string representation of the current date and time.
console.log(typeof myDate); // Output: 'object', indicating that myDate is of type object.

// Creating a new Date object with specified date and time:
Parameters: year, monthIndex, day, hours, minutes, seconds, milliseconds;
let myCreatedDate = new Date(2023, 0, 23);
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3);
let myCreatedDate2 = new Date("2023-01-14");
let myCreatedDate3 = new Date("01-14-2023"); // Note: This format might cause issues due to regional differences.
console.log(myCreatedDate.toLocaleString()); // Output: Localized string representation of the specified date and time.

// Obtaining the current timestamp in milliseconds since the Unix Epoch.
let myTimeStamp = Date.now();
console.log(myTimeStamp); // Output: Current timestamp in milliseconds.

// Additional operations with dates:
console.log(myCreatedDate.getTime()); // Output: Time value of the specified date in milliseconds since the Unix Epoch.
console.log(Math.floor(Date.now() / 1000)); // Output: Current timestamp in seconds since the Unix Epoch, rounded down.

// Creating a new Date object representing the current date and time.
let newDate = new Date();
console.log(newDate); // Output: Current date and time in your local timezone.
console.log(newDate.getMonth() + 1); // Output: Current month (1-12, January is 1).
console.log(newDate.getDay()); // Output: Current day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday).

// Using toLocaleString() to get the full name of the current weekday:
newDate.toLocaleString("default", {
  weekday: "long", // Specifies that we want the full name of the weekday.
});
