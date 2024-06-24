function sayHello(age, city){
    return "Hello, " + this.name + ". Your age is : " + age + " and I live in " + city
}

const myObj1 = {
    name: "Hanuman"
};

bindFunc = sayHello.bind(myObj1);
bindFunc1 = sayHello.bind(myObj1, 100);

console.log("Bind Output 1:",bindFunc(100,"Goa"));
console.log("Bind Output 2:",bindFunc1("Goa"));