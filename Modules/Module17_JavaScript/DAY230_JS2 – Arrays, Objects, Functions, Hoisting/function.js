/**
 * Function Statement, Function Declaration,
 * Function Expression,
 * Anonymous Function,
 * Named Function Expression,
 * Arrow Function
 */

//Function Declaration and Function Statement are same.
// FUnction Parameter
function sayHi (from , to){
    console.log(from + " is wishing Hi! to " + to);
}

// Function Invocation
// Function Arguments
sayHi("Khal" , "Uttam");

// Function Expression
// Annoymous Function Expression

const sayHiExpression = function (from , to){
    console.log(from + " is wishing Hi! to " + to + " from say Hi expression");
}

sayHiExpression ("Khal" , "Uttam");

// named function expression
const sayHiExpression1 = function sayHi(from , to){
    console.log(from + " is wishing Hi! to " + to + " from say Hi expression1");
}

sayHiExpression1 ("Khal" , "Uttam");

// Arrow Function - ES6

const hi = (from, to ) =>{
    console.log(from + " is wishing Hi! to " + to + " from say Hi expression1 arrow function");
}

hi("khal", "uttam");

// Frist class citizens || first class function
// functions can be used as methods and as variables and can be passed into function
// can be also returned from function

const hello = () => {
    return "say hello";
}

const helloWorld = (parms) => {
    return parms
}

// const func = helloWorld(hello);
// console.log(func);

console.log(helloWorld(hello)());
// Hellworld(hello) -> hello()