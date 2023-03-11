// import axios from 'axios';
const axios = require('axios');
// https://cat-fact.herokuapp.com/#/cat/facts
const fetchData = async () => {
    const data = await axios.get("https://cat-fact.herokuapp.com/facts");
    console.log("bbb", data);
}
console.log("aaa");
fetchData();
console.log("ccc");




// console.log("aaaa");
// async function mat(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             reject("cccc Resolveddd");
//         }, 5000);
//     });

// }
// console.log("bbbb");
// async function rr(){
//     let cb = await mat().then(res => console.log("Response output",res)).catch(err => console.log("error output => ", err));
//     return cb;
// }
// let a = rr();
// console.log(a);
// console.log("dddd");