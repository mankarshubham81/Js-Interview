// call() : it is a method of an object, substituting another object for a current object
// The call() method is a predefined JavaScript method.
// It can be used to invoke (call) a method with an owner object as an argument (parameter).
// With call(), an object can use a method belonging to another object. 

// Example:
// 1) 
const myObj = {
    name : "Shiv"
};

function sayHello(age, city){
    return "Hello, " + this.name + ". Your age is : " + age + " and I live in " + city
}

console.log(sayHello.call(myObj, 22, "Pune")); // call method with argument
// apply
// the difference between "call and apply is : " 
console.log(sayHello.apply(myObj, [23, "Aurangabad"]));;

// 2) call and apply without argument

const person0 = {
    fullName: function() {
      console.log("Full Name " + this.firstName + " " + this.lastName); 
    }
  }
  const person11 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person22 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "Mary Doe"
  person0.fullName.call(person22);
  person0.fullName.apply(person11);


//   The Difference Between call() and apply()
// The difference is:

// The call() method takes arguments separately.

// The apply() method takes arguments as an array.

// The apply() method is very handy if you want to use an array instead of an argument list.


// The apply() method accepts arguments in an array:

// Example
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.apply(person1, ["Oslo", "Norway"]);


// 3) Bind
// bind is use for reusable function


// The bind() method creates a new function that, when called, has its this keyword set to the provided
//  value, with a given sequence of arguments preceding any provided when the new function is called.

// 1)

const myObj1 = {
    name: "Hanuman"
};

function sayHello1(age, city){
    return "Hello, " + this.name + ". Your age is : " + age + " and I live in " + city
}

bindFunc = sayHello.bind(myObj1);

console.log("Bind Output",bindFunc(22,"Goa"));

// 2)
const module1 = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  
  const unboundGetX = module1.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // expected output: undefined
  
  const boundGetX = unboundGetX.bind(module1);
  console.log(boundGetX());
  // expected output: 42