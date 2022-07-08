//Array TypeError
let list: number[] = [1, 2, 3];
let list1: Array<number> = [1, 2, 3]; // Generic Type

// tuple Type
// Multiple lines
let x: [string, number];
x = ["hello", 10];
// One line
let y: [string, number] = ["goodbuy", 42];
// Error case:
x = [10, "hello"];

// Any Type
// Any type for array
let y1: [any, any] = ["goodbuy", 42];
let z: Array<any> = [10, "hello"];
// Any type for string
let notSure: any = false;
// Issue case (no error)
notSure = true; // boolean
notSure = 42; // number
notSure = "hello"; // string

// Enum TYpe
enum Directions {
    Up,
    Down,
    Left,
    Right,
}

Directions.Up; // 0
Directions.Down; // 1
Directions.Left; // 2
Directions.Right; // 3

// Custom index for eumn elements
enum Directions2 {
    Up = 2,
    Down = 4,
    Left = 6,
    Right,
}

Directions2.Up; // 2
Directions2.Down; // 4
Directions2.Left; // 6
Directions2.Right; // 7

// Never Type
//Function return Error
const msg = "hello";
const error = (msg: string): never => {
    throw new Error(msg);
};
// Function infinite loop
const infiniteLoop = (): never => {
    while (true) {}
};

// Object Type
const create = (o: object | null): void => {};

create(1); //Argument of type 'number' is not assignable to parameter of type 'object'
create("42"); //Argument of type 'string' is not assignable to parameter of type 'object'
create({ obj: 1 });

// Multiple types for one value
let id: number | string;
id = 10; // number is valid
id = "42"; // string is valid
id = true; // Type 'boolean' is not assignable to type 'string | number'.

// Type
type Name = string; // Custom type creation
let id1: Name; // Apply custom type
id1 = "42"; // No error, because type of "42" is a string
id1 = 10; // Type 'number' is not assignable to type 'string'
