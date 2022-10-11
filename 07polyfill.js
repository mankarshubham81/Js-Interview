// Polyfill of map


Array.prototype.myMap = function(callback){
    let temp = [];
    for(let i=0; i< this.length; i++){
        temp.push(callback(this[i], i, this));
    }

    return temp;
}

let myArray = [23, 64, 58, 45, 32, 81];

let newArrayForMap = myArray.myMap((n, i , actarr) => {
   return n * 2 + i;
})

console.log("newArray after applied myMap polyfil for multiply by to and add each index number to it's index element: ", newArrayForMap);

// Polyfill of filter

Array.prototype.myFilter = function(callback){
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            temp.push(this[i])
        } 
        
    }

    return temp;
}

let newArrayForFilter = myArray.myFilter((n) => {
   return n % 2 === 0;
//    return n > 40; // this statement going to return number greater than 40

})
console.log("newArrayForFilter after applied myMap polyfil for even number : ", newArrayForFilter);

// Polyfill of reduce

// myArray.reduce((accumulator, currentValue, i, actualArray) => { return bla-bla; }, initial_vallue );

Array.prototype.myReduce = function(callback, initialVallue){
    let accumulator = 0 || initialVallue;

    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? callback(accumulator, this[i], i, this) : this[i];        
    }

    return accumulator;
}

let newArrayForReduce = myArray.myReduce((accmulator,cur,i, actualArray) =>{
    return accmulator + cur; // returning Total sum of  myArray
} , 7 )

console.log("newArrayForReduce Result : ", newArrayForReduce);