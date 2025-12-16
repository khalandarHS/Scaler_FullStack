//numbers

const a = 10;
const b = -10;
const c = 10.345;
const d = -10.345;

console.log(typeof a);
console.log(a, b, c, d);

//strings

const str1 = "Hello";
const str2 = 'Hello World!';
const str3 = `Hello World!`;

console.log(typeof str1);
console.log(str1, str2, str3);

//Null

const g = null;
console.log(typeof g, g);

//Boolean

const bool1 = true;
const bool2 = false;

console.log(typeof bool1);
console.log(bool1, bool2);


// undefined || not defined

// not defined talks about variable which is not declared
// console.log(alpha);    //This is not declared anywhere 


// undefined -> when variable is declared but not initialized

let j;
console.log(typeof j, j);

// non - primitive types

// arrays
// collections of values which can store different data types values

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["Uttam", 2, 3, true, null, 6];

console.log(typeof arr1, arr1);
console.log(typeof arr2, arr2);

// objects - custom data type which can store any data

const person = {
    name: "Uttam",
    lastname: "Sharma",
    age: 23,
    hobbies: ["Coding", "Gaming", "Cooking"],
};

console.log(typeof person);
console.log(person);
console.log(person.name);

// functions - create a function when you want to perform
// a specific task again and again

// (...,...,..) -> function parameters
// { } is called as function body

function coffeeMachine(quantity, drink) {
    const iteam = "I want " + quantity + " " + drink;
    return iteam;
}

console.log(coffeeMachine("250ml","Expresso"));
console.log(coffeeMachine("200ml","Latte"));
console.log(typeof coffeeMachine);