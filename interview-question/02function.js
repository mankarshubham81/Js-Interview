myFun();

var myFun = () => {
    console.log("First");
}

myFun();

function myFun() {
    console.log("Second");
}

myFun();

// Output:
// Second
// First
// First 