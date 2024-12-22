// A promise is an object in js that represents evnetual completion or failure of an async operation, syntactically cleaner

//Returns an object that is either resolved or rejected
function setTimeoutPromisified(ms) {
  P = new Promise(resolve => setTimeout(resolve, ms));
  return P;
}

function callback() {
	console.log("3 seconds have passed");
}

setTimeoutPromisified(3000).then(callback) 
Promise = setTimeoutPromisified(3000);
console.log(Promise); // Returns an object of the promise class

