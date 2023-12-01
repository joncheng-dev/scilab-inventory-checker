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
// -- This makes the compiled JS code bulky
// Optimized: const enum Size {}
// -- This makes the compiled JS code clean

let mySize: Size = Size.Medium;
console.log(mySize); // This will show the numeric value of "Medium", 2.

// ### FUNCTIONS ################################################################
function calculateTax(income: number) { // hover over calculateTax; see 'void' type return value
}

function calculateTax2(income: number) { // hover. We see 'number' type return value, inferred.
  return 0;
}

// Best practice: Declare a return data type.
function calculateTax3(income: number): number { // Declared 'number' type
  return 0;
}
// Declare type void if you won't be returning anything
function calculateTax4(income: number): void { // Declared 'void' because no return value
}

// Notice 'income'. It is an unused parameter.
function calculateTax5(income: number): number { 
  return 0;
}
// There is a compiler option for detecting unused parameters.
// In tsconfig file, there is "noUnusedParameters". Can turn this on.
function calculateTax6(income: number): number {
  if (income < 50000) { // Error is gone if we use this parameter. 
    return income * 1.2;
  } 
}

// What if not all code paths return a value? What if income > 50000? 
function calculateTax7(income: number) {
  if (income < 50000) { 
    return income * 1.2;
  } 
  // If not "if" condition, this function returns undefined.
  // To catch this, turn on "noImplicitReturns" in tsconfig.json
}

function calculateTax8(income: number): number { //Best practice to annotate functions properly
  if (income < 50000) { 
    return income * 1.2;
  } else {
    return income * 1.3; // All code paths now return a value
  }
}

function calculateTax8(income: number): number { 
  let x; // If we declare a variable and don't use it in the function
  // This is an unused variable. To warn for this, un-comment in tsconfig.json:
  // "noUnusedLocals": true /* Enable error reporting when local variables aren't read. */,
  if (income < 50000) { 
    return income * 1.2;
  } else {
    return income * 1.3; 
  }
}

// TS is strict about the number of arguments passed in to a function.
function calculateTax9(income: number, taxYear: number) {
  if (taxYear < 2022) {
    return income * 1.2;
  } else {
    return income * 1.3;
  }
}

calculateTax9(10_000, 2022, 1); // JS would allow this, but TS does not.

// What about making a parameter optional?
function calculateTax0(income: number, taxYear?: number) { // Add '?' after taxYear
  if (taxYear < 2022) { 
    return income * 1.2;
  } else {
    return income * 1.3;
  }
}
// Now it's ok to call the function without 2 parameters
calculateTax0(10_000);

function calculateTax10(income: number, taxYear?: number) { // Add '?' after taxYear
  if (taxYear < 2022) { // However, taxYear is now possibly undefined.
    return income * 1.2;
  } else {
    return income * 1.3;
  }
}

// Resolve Approach #1:
function calculateTax11(income: number, taxYear?: number) { // Add '?' after taxYear
  if ((taxYear || 2022) < 2022) { // However, taxYear is now possibly undefined.
    return income * 1.2; // Doing this, if taxYear is given, use it. If not, use 2022
  } else {
    return income * 1.3;
  }
}

// Resolve Approach #2:
// Give taxYear a default value.
function calculateTax12(income: number, taxYear = 2022): number { // Default value 2022
  if (taxYear < 2022) { 
    return income * 1.2;
  } else {
    return income * 1.3;
  }
}
calculateTax12(10_000); // uses default value
calculateTax12(10_000, 2023); // uses 2023 passed in; optional argument

// ### OBJECTS ################################################################
// In JS, it's ok to declare an object, and then update it after with more properties.
let employee = { id: 1 };
employee.name = "Jon";
// This is not valid in TypeScript. Note the error on name property we're trying to add.

// TS has inferred the shape of this employee object.
// Just like all TS variables so far, we can explicitly apply a type annotation:
let employee2: {
  id: number,  // this object has two properties, specifically typed
  name: string,
} = { id: 1 }; // Name property missing here. 
employee2.name = "Jon"; // Error here is gone because of our type annotation.
// But now employee2 has a new kind of error. Property 'name' is missing in the initial
// instantialization of employee2.

// Fix Approach #1 - Set initial name to an empty string
let employee3: {
  id: number,  
  name: string,
} = { id: 1, name = '' }; 
employee2.name = "Jon"; 

// Fix Approach #2 - Make name property optional
let employee4: {
  id: number,  
  name?: string,
} = { id: 1 }; // Now name property is not necessary for initializing employee4.
employee2.name = "Jon"; 

// Fix Approach #3 - Initialize it correctly.
let employee5: {
  id: number,
  name: string,
} = { id: 1, name: "Jon" }; // Both id and name are provided on instantialization.

// What if you want to make some properties read only so that you can't change them later?
// Use the read-only modifier
let employee6: {
  readonly id: number, // readonly modifier prevents id property from being changed later
  name: string,
} = { id: 1, name: "Jon" };
employee6.id = 0; // This will not work.