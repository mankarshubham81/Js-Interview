// Function in JavaScript

//Q1 - What is Function Declaration/ Function Defination/ Function statement ?
// =>
function sum(a, b){
    return a + b;
}


// Q2 - What is  Function Expression ?
// =>
//  When you store function inside of varible then it's called Function Expression
// In short, function expression is assign to varible
const square = function (num){
    return num * num;
}
// This below part is called "annoynomous function"(the function which has "no name")
// function (num){
//     return num * num;
// }

// annoynomous function can be assign to varible or passed as call back function.


// Q3 - What are First class Functions ? 

function calculateSquare(num){
    return num * num;
}

function displaySquare(fun){
    console.log("Square is ",fun(5));
}

displaySquare(calculateSquare);

// Q4 - What is IIFE ?
// => 
// Immeditely Invoked Function Expression
// for IIFE, we just need to wrap whole function in parenthesis(i.e "()") and append another argument to pass argument
// like below 

(function recaangle(length, breath) {
    console.log("Area of Rectangle is : ", (length*breath))
})(20,30);

// Q5 - IIFE - O/P Based Question ?
// => 
// Question type: IIFE inside of IIFE

(function(x){
    return ( function(y){
        console.log(x);
    } )(2);
})(1);

// OUTPUT : 1

// Q6 What is Function Scope ? 
// =>
// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = 'SAM';

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // Returns 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}
console.log(getScore()); // Returns "SAM scored 5"

// Q7 - Output based Question on "function scope" 

// 1) 
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log("i)",i);
    }, 10000)    
}
console.log("--------------");
// 2) 
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log("ii",i);
    }, 10000)    
}


// --------------
// i) 0
// i) 1
// i) 2
// i) 3
// i) 4
// ii 5
// ii 5
// ii 5
// ii 5
// ii 5


// 3) 
for (let i = 0; i < 5; i++) {
    setTimeout(function ()  {
        console.log("i)",i);
    }, 10000)    
}
console.log("--------------");
// 4) 
for (var i = 0; i < 5; i++) {
    setTimeout(function ()  {
        console.log("ii",i);
    }, 10000)    
}


// --------------
// i) 0
// i) 1
// i) 2
// i) 3
// i) 4
// ii 5
// ii 5
// ii 5
// ii 5
// ii 5

// Q8 - Function Hoisting ?
// Function are Hoisted compeltely(i.e only Function Declaration/ Function Defination/ Function statement)
functionName();

function functionName(){
console.log("Hello World !");
}

// Q9 - Function Hoisting - Output Based Question ?
// =>

// 1)
// var x = 21;

// function test(){
//     console.log("VAlue of x : ",x);
//     let x = 8; 
// }

// test(); // ERROR

// Output :
    // console.log("VAlue of x : ",x);
// ReferenceError: x is not defined


// 2) 
var x = 21;

function test(){
    console.log("VAlue of x : ",x);
    var x = 8; 
}

test();

// Output :
// VAlue of x :  undefined


// Q10 - params/parameter vs Argument

function test3(){ // params/parameter
    console.log("test3 function");
}

test3(); // Argument


// Q10 - Output based Question
// 1)
// const fn = (a, ...numbers, x, y) => {
//     console.log(x,y);
// };

// fn(5,6,3,7);

// Output :
// SyntaxError: Rest parameter must be last formal parameter


// 2)
const fn1 = (a, x, y, ...numbers) => {
    console.log("Result",x,y);
};

fn1(5,6,3,7);