// Varible Shadowing

function test(){
    let a = "Dog";

    if(true){
        let a = "Fox";
        console.log("if a : ",a);
    }
        
    console.log("test a : ",a);

}

test();

// OUTPUT: 
// if a :  Fox
// test a :  Dog


// You can shadow var varible by using let
// but we can not shadow let varible by var


// If we try to shadow let varible by var then it is known as "illegal shadowing"
function test1(){
    var a = "Dog";

    if(true){
        let a = "Fox";
        console.log("if a : ",a);
    }
        
    console.log("test a : ",a);
}

// test1();

// OUTPUT: 
// if a :  Fox
// test a :  Dog


function test2(){
    let a = "Dog";

    if(true){
        var a = "Fox";
        // Cannot redeclare block-scoped variable 'a'.
        console.log("if a : ",a);
    }
        
    console.log("test a : ",a);
}
test2();

// OUTPUT: 
// SyntaxError: Identifier 'a' has already been declared