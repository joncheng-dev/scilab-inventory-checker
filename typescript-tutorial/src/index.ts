// ### BUILT-IN DATA TYPES ##################################################
let sales: number = 123_456_789; // `number` type. // Can put "_" to break up a large num
let course: string = "TypeScript"; // 'string' type
let is_published: boolean = true; // 'boolean' type

// ### ANY type ############################################################
// TS can infer type of our variables based on their values
let sales2 = 123_456_789; // can work without "number"
let course2 = "TypeScript"; // can work without "string"
let level; // If declare a variable but don't initialize its value, it becomes type 'any'
// can set it to a number, and then later to type string
level = 1;
level = "a";
// but this is against the purpose of using TypeScript in the first place.

function render(document) {
  // 'document' is not typed. Defaults to 'any' type. Bad practice
  console.log(document);
}

function render2(document: string) {
  // 'document' is type string. Better.
  console.log(document);
}

// ### ARRAY type ############################################################
let numbers = [1, 2, "3"]; // In JS, it's valid to declare an array of mixed types
// In TS, we explicitly apply a type notation

let numbers2: number[] = [1, 2, "3"]; // Error. Mixed type. Not good.
let numbers3: number[] = [1, 2, 3]; // All type number. This is fine.
let numbers4 = [1, 2, 3]; // Without type annotation, compiler infers type 'number'
let numbers5 = []; // Here, this array is of type 'any'. Avoid.
// Best practice is to have type annotation for your empty array.
let numbers6: number[] = [];

// ** Benefit of using TypeScript: TS has Code Completion or Intellisense
let numbers7: number[] = [];
numbers7.forEach(n => n.); // while typing ".", we see methods of number object
// I.e. toExponent, toFixed, toLocaleString, toPrecision, toString, valueOf

// ### TUPLE type ############################################################
// A fixed length array where each element has a particular type
// Often used when working with a pair of values
// **Internally, they are simply JS arrays -- see this upon compiling to JS** 

// Ex: an 'id' and a 'name'
// '1', 'Jon'
let user: [number, string] = [1, 'Jon']; // initialize variable: fixed lengthed array, exactly 2 elements
let user2: [number, string] = [1, 'Jon', 0]; // Error: Cannot have 3 elements.
let user3: [number, string] = ['1', 'Jon']; // Error: First element not a number.

// Code Completion available
let user4: [number, string] = [1, 'Jon'];
user[0].; // Typing '.' shows us available methods of number objects
// I.e. toExponent, toFixed, toLocaleString, toPrecision, toString, valueOf
user[1].; // Typing '.' shows us available methods of string objects
// I.e. Symbol, charAt, charCodeAt, etc.
user4.push(1); // 

// ### ENUMS #####################################################################
// Let's say you want to make constants, and they're related to each other.
// Here, we have t-shirt sizes
const small = 1;
const medium = 2;
const large = 3;

// can group these constants together using 'enum'
// PascalCase naming convention (upper camel case)
const enum Size {
  // Can set values to each. But by default, first element is value of 0.
  Small = 1, // If add 1 to Small, the others will become 2 and 3
  Medium,
  Large,
}

const enum Size2 { // If assigning non numerical values, must manually assign to all.
  Small = 's',
  Medium = 'm',
  Large = 'l',
}

// Putting a const in front of enum optimizes the js code created.
// Not optimized: enum Size {}
// Optimized: const enum Size {}

let mySize: Size = Size.Medium;
console.log(mySize); // This will show the numeric value of "Medium", 2.
