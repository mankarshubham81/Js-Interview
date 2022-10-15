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

// Output :
// Result 6 3


// Q11: Rest and spread operator(...)

// 1)

// Use rest to enclose the rest of specific user-supplied values into an array:
function myBio(firstName, lastName, ...otherInfo) {  // Rest operator
    return otherInfo;
  }
  
  // Invoke myBio function while passing five arguments to its parameters:
  myBio("Alan", "Turing", "BlackRock", "Web Developer", "Male");
  
  // The invocation above will return:
  ["CodeSweetly", "Web Developer", "Male"]

  //   2)
  
  // Define a function with three parameters:
  function myBio(firstName, lastName, company) { 
      return `${firstName} ${lastName} runs ${company}`;
    }
    
  // Use spread to expand an array’s items into individual arguments:
  myBio(...["Alan", "Turing", "BlackRock"]);
  
// The invocation above will return:
// Output :  “Oluwatobi Sofela runs CodeSweetly”
  

// Q12 What is Callback Function ?
// =>
// A callback function is a function passed into another function as an argument,
//  which is then invoked inside the outer function to complete some kind of routine or action.

// function greeting(name) {
//     alert(`Hello, ${name}`);
//   }
  
//   function processUserInput(callback) {
//     const name = prompt("Please enter your name.");
//     callback(name);
//   }
  
//   processUserInput(greeting);


// Example of callback function can be map, filter, reduce, setTimeout, setInterval

let myArray = [23, 64, 58, 45, 32, 81];

  let mapResult = myArray.map((n, index, actualArray) => {
    return n * 3;
})

let filterResult = myArray.filter(function (a){
    return a%2 === 1
})
console.log("mapResult : ", mapResult);
console.log("filterResult : ", filterResult);

// Q13 - Arrow function 
// =>
// Arrow functions were introduced in ES6.
// Arrow functions allow us to write shorter function syntax:

// Arrow Function Syntax
// The syntax of the arrow function is:
/* let myFunction = (arg1, arg2, ...argN) => {
    statement(s)
} */

// If the body has single statement or expression, you can write arrow function as:
// let myFunction = (arg1, arg2, ...argN) => expression

console.log("Arrow function");

// Before Arrow function
hello1 = function() {
  return "Hello World!";
}

console.log("hello1 ", hello1());

// With Arrow Function:
hello2 = () => {
  return "Hello World!";
}

console.log("hello2 ", hello2());

// Arrow Function about "this" keyword
// Arrow Function does NOT inherit "this" keyword
let myObj = {
    userName : "Ravi",
    hello3 : () => {
        console.log("hello3 : ", this.userName);
    },
    hello4: function () {
        console.log("hello4 : ", this.userName);
    }
}

myObj.hello3();
myObj.hello4();

// Output :
// hello3 :  undefined
// hello4 :  Ravi


// function expression
let x1 = function(x, y) {
    return x * y;
 }

 // using arrow functions
let x2 = (x, y) => x * y;


// If a function has only one argument, you can omit the parentheses. For example,

let greet = x => console.log(x);
greet('Hello'); // Hello 

// Arrow Function as an Expression
// You can also dynamically create a function and use it as an expression. For example,

let age = 5;

let welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');

welcome(); // Baby


// If a function body has multiple statements, you need to put them inside curly brackets {}. For example,

let sum5 = (a, b) => {
    let result = a + b;
    return result;
}

let result10 = sum5(5,7);
console.log(result10); // 12


// this with Arrow Function
// Inside a regular function, this keyword refers to the function where it is called.

// However, this is not associated with arrow functions. Arrow function does not have its own this. So whenever you call this, it refers to its parent scope. For example,

// Inside a regular function

function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {

        // this is accessible
        console.log(this.age);

        function innerFunc() {

            // this refers to the global object
            console.log(this.age);
            console.log(this);
        }

        innerFunc();

    }
}

let x6 = new Person();
x6.sayName();
// Output

// 25
// undefined
// Window {}



// Inside an arrow function

function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {

        console.log(this.age);
        let innerFunc = () => {
            console.log(this.age);
        }

        innerFunc();
    }
}

const x7 = new Person();
x7.sayName();
// Output

// 25
// 25



// Q15 -    Arrow FUnction vs Regular function
// =>
// differences
// 1) Syntax 

function triangle1(base,height) {
    return 0.5 * base * height;
}

const triangle2 = (base,height) => {
    return 0.5 * base * height;
}

// 2) Implict return keyword
function triangle3(base,height) {
    return 0.5 * base * height;
}

const triangle4 = (base,height) => 0.5 * base * height;

// 3) arguments keyword

function argKeyword() {
    console.log(arguments) // [Arguments] { '0': 3, '1': 7, '2': 5 }
}

argKeyword(3,7,5);

const noArgsKeyword = (b) => {
    console.log("res 0",arguments) // error : 
}

noArgsKeyword(4,6,8);
