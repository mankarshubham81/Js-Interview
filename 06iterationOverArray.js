let myArray = [23, 64, 58, 45, 32, 81];

myArray.forEach((n, i, nums)=>{
    console.log(n,i, nums);
})

// OUTPUT:
// 23 0 [ 23, 64, 58, 45, 32, 81 ]
// 64 1 [ 23, 64, 58, 45, 32, 81 ]
// 58 2 [ 23, 64, 58, 45, 32, 81 ]
// 45 3 [ 23, 64, 58, 45, 32, 81 ]
// 32 4 [ 23, 64, 58, 45, 32, 81 ]
// 81 5 [ 23, 64, 58, 45, 32, 81 ]

// filter reeturn only those element which full fill the condition
let filterResult_1 = myArray
    .filter(n => {
       return n%2 !== 0;
    })

console.log("filterResult_1 : ", filterResult_1);

    myArray
    .filter(n => n%2 == 0)
    .forEach(n => 
        // filterResult_2 
        console.log("filterResult_2 : ",n*3)
    )

let reduceResult = myArray.reduce((accmulator,cur,i, actualArray) =>{
    return accmulator + cur;
    // return `Total sum : ${accmulator + cur}`
} , 7 )
// accmulator is the result of previous computation
// 7 is initial value of accmulator 

console.log("reduceResult : ", reduceResult);

let mapResult = myArray.map((n, index, actualArray) => {
    return n * 3;
})
console.log("mapResult : ", mapResult);

// Error : we can not "chain" "forEach" to any other higher order function(i.e. map, reduce, filter, call, apply, bind)
// let forEachResult = myArray.forEach(n => n + 1).bind(3)
// console.log("forEachResult : ", forEachResult);