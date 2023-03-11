    function greet(){
        console.log("Hello World !");
    }
    function greetArg(name){
        console.log(`Hello ${name} !`);
    }
    function greetInterval(){
        console.log("Hello World ! again");
    }
    const intervalId1 = setTimeout(greet, 2000);
    clearTimeout(intervalId1);
    const intervalId2 = setInterval(greet, 2000);
    clearInterval(intervalId2);
    // setTimeout(greetArg, 2000, "Shubham");
    // setInterval(greetInterval, 2000);
