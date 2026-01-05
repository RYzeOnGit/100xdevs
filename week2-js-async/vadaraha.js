// Promises are a way to handle asynchronous operations in JavaScript.
// Promises are objects that represent the eventual completion or failure of an asynchronous operation.
// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   function callback() {
//       console.log("3 seconds have passed");
//   }
  
//   setTimeoutPromisified(3000).then(callback)

const fs = require("fs");

function readFilePromisified(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, "utf8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
function callback(data) {
    console.log(data);
}
function notFound(err) {
    console.log("File not found");
}

readFilePromisified("meow.txt").then(callback).catch(notFound);
readFilePromisified("a.txt").then(callback).catch(notFound);