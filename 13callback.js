function greet (name) {
    console.log("Hello",name);
}

function higherOrderFunction(callback){
    let name = "Shubham";
    callback(name)
}

higherOrderFunction(greet)