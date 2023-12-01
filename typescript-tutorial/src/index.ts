// ENUMS
// Let's say you want to make constants, and they're related to each other.
// Here, we have t-shirt sizes
const small = 1;
const medium = 2;
const large = 3;

// can group these constants together using 'enum'
// PascalCase
const enum Size {
  // Can set values to each.
  Small = 0, // If add 0 to Small, the others will become 1 and 2
  Medium,
  Large,
}

// Putting a const in front of enum optimizes the js code created.
// Not optimized: enum Size {}
// Optimized: const enum Size {}

let mySize: Size = Size.Medium;
console.log(mySize); // This will show the numeric value of "Medium", 1.

// FUNCTIONS
