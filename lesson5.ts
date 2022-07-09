// Simple object example

let user = {
    name: "Yauhen",
    age: 30,
};

// Simple object example
let user1: any = {
    name: "Yauhen",
    age: 30,
};

user1 = "test";

// Array Type
let list2: Array<number> = [1, 2, 3];

// Define object type
let user2: { name: string; age: number } = {
    name: "Yauhen",
    age: 30,
};

// Try to change property
let user3: { name: string; age: number } = {
    name: "Yauhen",
    age: "test",
    /*
    Type 'string' is not assignable to type 'number'
    The expected type comes from property 'age' which is declared here on type '{ name: string; age: number; }'
    */
};

// Try to change variable type
user3 = "test"; // Type 'string' is not assignable to type '{ name: string; age: number; }'

let user4: { name: string; age: number } = {
    name: "Yauhen",
    age: 30,
    nickName: "webDev",
    /*
    Type '{ name: string; age: number; nickName: string; }' is not assignable to type '{ name: string; age: number; }'.
  Object literal may only specify known properties, and 'nickName' does not exist in type '{ name: string; age: number; }'
    */
};

let user5: { name: string; age: number; nickName: string } = {
    name: "Yauhen",
    age: 30,
    nickName: "webDev",
};

// Base object strucure
let user6: { name: string; age: number } = {
    name: "Yauhen",
    age: 30,
};
// dynamicly try to add 'nickName'property for "User" object
user6.nickname = "webDev"; // Property 'nickname' does not exist on type '{ name: string; age: number; }'

// Updating object type
let user7: { name: string; age: number; nickName: string } = {
    name: "Yauhen",
    age: 30,
    nickName: "webDev",
};

// New admin object
let admin: { name: string; age: number; nickName: string } = {
    name: "Max",
    age: 20,
    nickName: "Mad",
};

// 2 object with the same types
let user8: { name: string; age: number; nickName: string } = {
    name: "Yauhen",
    age: 30,
    nickName: "webDev",
};

let admin1: { name: string; age: number; nickName: string } = {
    name: "Max",
    age: 20,
    nickName: "Mad",
};

// Using Type for objects structure
type Person = { name: string; age: number; nickName: string };
// Apply person type from objects with the same structure
let user9: Person = {
    name: "Yauhen",
    age: 30,
    nickName: "webDev",
};
let admin2: Person = {
    name: "Max",
    age: 20,
    nickName: "Mad",
};

// 2 object with almost the same structure
let user10: Person = {
    name: "Yauhen",
    age: 30,
    nickName: "webDev",
};
let admin3: Person = {
    name: "Max",
    age: 20,
    getPass(): string {
        return `${this.name}${this.age}`;
    },
    /*
    Type '{ name: string; age: number; getPass(): string; }' is not assignable to type 'Person'.
  Object literal may only specify known properties, and 'getPass' does not exist in type 'Person'.
   */
};

// Updating type with optiona properties
type Person2 = {
    name: string;
    age: number;
    nickName?: string;
    getPass?: () => string;
};

// 2 object with almost the same structure
let user11: Person2 = {
    name: "Yauhen",
    age: 30,
    nickName: "webDev",
};
let admin4: Person2 = {
    name: "Max",
    age: 20,
    getPass(): string {
        return `${this.name}${this.age}`;
    },
};
