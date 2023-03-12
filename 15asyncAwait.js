const axios = require('axios');

async function fetchData(){
    try {
        let data = await axios.get("https://cat-fact.herokuapp.com/facts");
        console.log("Result =>", data);
    } catch (error) {
        console.log("Errror 7 => ",error)
    }
    finally{
        console.log("Promise Finished");
    }
    
}

fetchData();