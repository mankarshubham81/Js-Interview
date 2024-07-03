var varible = 10;
(() => {
    console.log("a"+varible);

    varible = 20;

    console.log("b"+varible);

})(); // IFFE => Imeditely invoked function expression

console.log("c"+varible);
var varible = 30;

// Output:
// a10
// b20
// c20