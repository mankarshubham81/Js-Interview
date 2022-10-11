 // Hoisting
 let b;
 console.log(count);
 var count = 10;
 b =45;
 
 
 // output :
 // undefined


//  let and const are in "temporal dead zone"
// "temporal dead zone" is the time between the Declaration and the Initilization


// Examples

// 1)
function abc(){
    console.log(a);

    var a =10;
}

abc();

// OUTPUT: 
// undefined


function abc1(){
    console.log(a, b, c);

    var a =10;
    let b = 20;
    const c = 30;
}

abc1();
// It is throwing error because "let b" and "const c" are in "temporal dead zone" 
// OUTPUT: 
// C:\Users\shubham\Desktop\AdvanceJs\05hoisting.js:32
//     console.log(a, b, c);
//                    ^

// ReferenceError: Cannot access 'b' before initialization