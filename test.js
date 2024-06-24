// // function myBio(firstName, lastName, company) { 
// //     return `${firstName} ${lastName} runs ${company}`;
// //   }
  
// // // Use spread to expand an array’s items into individual arguments:
// // const dataArray = ["Alan", "Turing", "BlackRock"]
// // console.log(myBio(...dataArray)); // spread array


// // function greeting(name) {
// //     alert(`Hello, ${name}`);
// //   }
  
// //   function processUserInput(callback) {
// //     const name = prompt("Please enter your name.");
// //     callback(name);
// //   }
  
// //   processUserInput(greeting);

// // Abstraction Example
// function Circle(radius) {
//   this.radius = radius;
//   // here we need to hide certain member from the outside
//   // we can do this like this,
//   // I mean define a property by in local varible/scope
//   // so outside of our scope it won't be accessible
//   let defaultLocation = { x: 0, y: 0};
//   // this.defaultLocation = { x: 0, y: 0};

//   // And to conver it into local scope we can do this
//   // Note: now this is function not method
//   // because "methods" are associated with "objects"
//   let computeOptimumLocation = function (factor) {
//           // ... this is function
//   }

//   // this.computeOptimumLocation = function () {
//   //     // ... this is method
//   // }

//   this.draw = function() {
//   // So now computeOptimumLocation methos is not associated with any object
//       // now it is only in local scope
//       // we can call this function like this below
//       computeOptimumLocation(0.1);
//   // this.computeOptimumLocation(0.1);
//       console.log(" draw method ");
//   }
// }

// const circObj = new Circle(1);
// console.log("circObj properties : ", circObj);

// // Here in the output you can see, now we can 
// // access only radius member/property and draw method
// // this is called "Abstraction"
// //because we are hiding "defaultLocation" and "computeOptimumLocation"
// // I mean unessential 
// // and showing only essentials, "radius" and "draw"
// // Output:
// // circObj properties :  Circle { radius: 1, draw: [Function (anonymous)] }

function varExample() {
  console.log(x); // undefined (hoisted)
  var x = 10;
  console.log(x); // 10

  if (true) {
    var x = 20; // Same variable (function-scoped)
    console.log(x); // 20
  }

  console.log(x); // 20 (x was modified inside if-block)
}

// varExample();

function letExample() {
  // console.log(x); // undefined (hoisted)
  let x = 10;
  console.log(x); // 10

  if (true) {
    let x = 20; // Same variable (function-scoped)
    console.log(x); // 20
  }

  console.log(x); // 20 (x was modified inside if-block)
}

letExample();