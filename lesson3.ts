// Simple example of enum type
enum Directions3 {
    Up,
    Down,
    Left,
    Right,
}

Directions3.Up; // 0
Directions3.Down; // 1
Directions3.Left; // 2
Directions3.Right; // 3

// Reverse enum
Directions3[0]; // "Up"
Directions3[1]; // "Down"
Directions3[2]; // "Left"
Directions3[3]; // "Right"

// Custom index for enum elements
enum Directions4 {
    Up = 2,
    Down = 4,
    Left = 6,
    Right = 8,
}
Directions4.Up; // 2
Directions4.Down; // 4
Directions4[6]; // "Left"
Directions4[8]; // "Right"

// Custom name for keys 
enum links {
    youtube = 'https://youtube.com/',
    vk = 'https://vk.com',
    facebook = 'https://facebooks.com'
}
// Using
links.vk; // "https://vk.com"
links.youtube; // "https://youtube.com/"
// Compiled code
"use strict";
var links1;
( function(links1){
    links1["youtube"] = "https://youtube.com/";
    links1["vk"] = "https://vk.com";
    links1["facebook"] = "https://facebooks.com";
})(links1 || (links1={}))
//Comiles Code
"use strict";
var Directions5;
(function(Directions5){
    Directions5[Directions5["Up"] = 0] = "Up";
    Directions5[Directions5["Down"] = 1] = "Down";
    Directions5[Directions5["Left"] = 2] = "Left";
    Directions5[Directions5["Right"] = 3] = "Right";
})(Directions5 || (Directions5={}))


//const enum (without using)
const enum links2 {
    youtube = 'https://youtube.com/',
    vk = 'https://vk.com',
    facebook = 'https://facebooks.com'
}
// Compiled code is empty
"use strict";

// using of enum properties
const arr =[links2.vk, links2. facebook];
 //Compiled code 
"use strict";
const arr = ["https://vk.com"/* vk */, "https://facebooks.com" /* facebook */]
