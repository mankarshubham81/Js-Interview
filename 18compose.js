function add(a) {
    return a + 5;
}

function substract(a) {
    return a - 2;
}

function multiply(a) {
    return  a * 5;
}

const compose = (...functions) => {
    return (args) => {
        return functions.reduceRight((arg, fn) => fn(arg), args);
    }
}

const evaluate = compose(add, substract, multiply);
// "compose" => pipe evaluate function right to left
// Like you do this for compose, do this for "pipe" as well
// "pipe" => pipe evaluate function left to right

console.log(evaluate(5));

