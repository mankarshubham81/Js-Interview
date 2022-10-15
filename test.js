// function myBio(firstName, lastName, company) { 
//     return `${firstName} ${lastName} runs ${company}`;
//   }
  
// // Use spread to expand an array’s items into individual arguments:
// const dataArray = ["Alan", "Turing", "BlackRock"]
// console.log(myBio(...dataArray)); // spread array


function greeting(name) {
    alert(`Hello, ${name}`);
  }
  
  function processUserInput(callback) {
    const name = prompt("Please enter your name.");
    callback(name);
  }
  
  processUserInput(greeting);