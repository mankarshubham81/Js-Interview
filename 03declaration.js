// 1) Declaration on varible

var a;
var a; // fine
// we can redeclare var varible as many times as we want


// output is nothing but fine

let b;
let b;  // wrong

// OUTPUT: 
// SyntaxError: Identifier 'a' has already been declared

// 2) Declaration without initialization

const c;
// const c = 81;
// OUTPUT: 
// SyntaxError: Missing initializer in const declaration
