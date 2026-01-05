//Promise chaining is a way to chain multiple promises together.
function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

setTimeoutPromisified(3000).then(() => {
    console.log("3 seconds have passed");
    return setTimeoutPromisified(6000);
}).then(() => {
    console.log("6 seconds have passed");
    return setTimeoutPromisified(9000);
}).then(() => {
    console.log("9 seconds have passed");
});