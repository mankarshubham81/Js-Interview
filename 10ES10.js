const myArray = [["Prashant",23],["Kunal",22],["Pavan",24],["Rushikesh",24]];

const myObjRes1 = Object.fromEntries(myArray)
const myObjRes2 = Object.entries (myObjRes1)

console.log("myObjRes1 : ",myObjRes1);
console.log("myObjRes2 : ", myObjRes2);