/*  Data types in JS
- number
- string
- boolean
- null
- undefined
- object
- Symbol //ES6
*/

// Variavbles type changing
var num = 42; // number
num = "hello"; // string
num = false; // boolean

// Defining types using operators typeof
typeof 42; // "number"
typeof "str"; // "string"
typeof true; // 'boolean"
typeof []; // object
typeof {}; // object
typeof null; // object
typeof undefined; // "undefined"
typeof Symbol(); // "symbol"

// const
const num1 = 42;
num1 = "hello"; // Uncaught TypeError: Assignment to constant variable

// let
let num2 = 42;
num2 = "hello"; // No errors

// Boolean Type
let isCompleted: boolean = false;
isCompleted = 42; // Type '42' is not assignable to type 'boolean'
isCompleted = "42"; // Type '42' is not assignable to type 'boolean'
isCompleted = true;

// Number Type
const decimal: number = 6;
const integer: number = 7.1;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;

// String Type for simple string
const name1: string = "Yauhen";
// String Type for template string
const sentace: string = `Hello, my name is ${name1}`;

// Null & Undefined Types
// JavaScript
typeof null; // "object"
typeof undefined; // "undefined"

// TypeScript types:
const u: undefined = undefined;
const n: null = null;

// Void Type
// For function result:
const greetUSer = (): void => {
    alert("Hello, nice to see you!");
};
// For greetUser: 
// Error: Type '() => void' is not assignable to type 'void'
const greetUser1: void = () => {
    alert("Hello, nice to see you!")
}
