// let vs var vs const
// scope => {}
// var is functional scope
// let and const are blocked scope

{ 
    var a = 5;
}
function letExample() {
    console.log(y); // ReferenceError (not initialized)
    let y = 10;
    console.log(y); // 10
  
    if (true) {
      let y = 20; // Different variable (block-scoped)
      console.log(y); // 20
    }
  
    console.log(y); // 10 (outer y is unchanged)
  }
  
  letExample();