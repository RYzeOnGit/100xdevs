const axios = require('axios');
//Fetch is a promise based HTTP client for the browser and node.js
async function main() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET",
        body: {
            username: "RYze"
        },
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    console.log(data);
    }

//Axios is a promise based HTTP client for the browser and node.js
async function main() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users", {
        username: "Meow"
    },
    {
        headers : {
            "Content-Type": "application/json"
        }
    });
    console.log(response.data);
}

main();