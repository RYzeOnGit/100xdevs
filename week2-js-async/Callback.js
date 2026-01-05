// Syntactically bad way
function callback() {
    console.log("3 seconds have passed");
}
setTimeout(callback, 3000); //Callback method
// Synchronous code runs in the order it is written.
// Asynchronous code runs in the order it is executed.
//  callback is a function that is passed as an argument to another function.
// Error first callback - the first argument is the error, the second argument is the data.