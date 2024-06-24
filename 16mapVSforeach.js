const numbers = [1, 2, 3, 4, 5];

// Using forEach to log each number
let foreachResult =  numbers.forEach((number, index) => {
  console.log(`Index ${index}: ${number}`);
});
console.log("foreachResult :", foreachResult);
// Output: Index 0: 1, Index 1: 2, Index 2: 3, Index 3: 4, Index 4: 5

// Using map to create a new array with each number doubled
const doubled = numbers.map(number => number * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
// The original array remains unchanged
console.log(numbers); // [1, 2, 3, 4, 5]

// Key points to note:
// - forEach does not return anything, and is used for side effects.
// - map returns a new array, and is used for transforming data.

// const numbers = [1, 2, 3, 4, 5];

// Using forEach to double each number in the original array
numbers.forEach((number, index, arr) => {
  arr[index] = number * 2; // Directly modify the element in the original array
});

console.log(numbers); // [2, 4, 6, 8, 10]

// Key point to note:
// - While map is used for creating a new array, forEach can be used to modify the original array by directly changing its elements within the callback function.