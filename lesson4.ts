// Function example
const createPassword = (name2, age2) => `${name2}${age2}`;
createPassword("Jack", 31);
// Arguments type
const createPassword1 = (name: string, age: number) => `${name}${age}`;
// Multiple argument types
const createPassword2 = (name: string, age: number | string) => `${name}${age}`;
createPassword2("Jack", 31); // 'Jack31'
createPassword2("Jack", "31"); // 'Jack31'

// Default arguments
const createPassword3 = (name: string = "Max", age: number | string = 20) =>
    `${name}${age}`;
createPassword3(); // "Max20"
// Call function with wrong argument
createPassword3(null);
/*Argument of type 'null' is not assignable to parameter of type 'string | undefined'*/

// Function with two arguments
const createPassword4 = (name: string, age: number) => `${name}${age}`;
//Call function with one argument
createPassword4("Jack"); //Expected 2 arguments, but got 1
// Function with optional argument 'age'
const createPassword5 = (name: string, age?: number) => `${name}${age}`;
// REST
const createSkills = (name, ...skills) =>
    `${name}, my skills are ${skills.join()}`;
// REST type
const createSkills2 = (name: string, ...skills: Array<string>) =>
    `${name}, my skills are ${skills.join()}`;

// Call function with REST arguments
createSkills2("Jack", "JS", "ES6", "React"); // "Jack, my skills are JS,ES6,React"

// Return type is string
const createPassword6 = (name: string, age: number | string): string =>
    `${name}${age}`;
// Return type is number
const sum = (first: number, second: number): number => first + second;
// Return type is object
const createEmptyObject = (): object => ({});

// Void Type
const greetUser1 = (): void => {
    alert("Hello, nice to see you!");
};
// Never Type
//Function return Error
const msg1 = "hello";
const error1 = (msg: string): never => {
    throw new Error(msg);
};
// Function infinite loop
const infiniteLoop1 = (): never => {
    while (true) {}
};

// Function variable type
let myFunc;

function oldFunc(name: string): void {
    alert(`Hello ${name}, nice to see you!`);
}

myFunc = oldFunc;

// Describe function type
let myFunc1: (firstArg: string) => void;

function oldFunc1(name: string): void {
    alert(`Hello ${name}, nice to see you!`);
}
myFunc1 = oldFunc1;

// Describe function type with wrong return type
let myFunc2: (firstArg: string) => number;
function oldFunc2(name: string): void {
    alert(`Hello ${name}, nice to see you!`);
}
myFunc2 = oldFunc2;
/*
Type '(name: string) => void' is not assignable to type '(firstArg: string) => number'.
  Type 'void' is not assignable to type 'number'
*/
