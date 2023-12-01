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

// BUILT-IN DATA TYPES
let sales: number = 123_456_789; // `number` type. // Can put "_" to break up a large num
let course: string = "TypeScript"; // 'string' type
let is_published: boolean = true; // 'boolean' type

// ANY type
// TS can infer type of our variables based on their values
let sales2 = 123_456_789; // can work without "number"
let course2 = "TypeScript"; // can work without "string"
let level; // If declare a variable but don't initialize its value, it becomes type 'any'
// can set it to a number, and then later to type string
level = 1;
level = "a";
// but this is against the purpose of using TypeScript in the first place.
