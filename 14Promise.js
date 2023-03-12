const axios = require('axios');

const data = axios.get("https://cat-fact.herokuapp.com/facts");

data
    .then((res) =>{
        console.log("Response data ", res.data);
    })
    .catch((err) =>{
        console.log("ERRR 10 => ", err);
    });
