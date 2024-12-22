// Asynchronous programming in JavaScript
const fs = require("fs");

function print(err, data) {
    if (err) {
        console.error("File not found");
    }
    else{
        console.log(data);
    }
}
// All tasks are started together but we cater to the one's which finish first (EFTF) -> Earliest Finish Time First
// Done gets printed first, then contents of a.txt and b.txt
fs.readFile("a.txt", "utf8", print);
fs.readFile("b.txt", "utf8", print);
console.log("Done");
setTimeout(() => console.log("After 2 seconds"), 2000); //Prints after 2 seconds