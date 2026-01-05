function sum(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  // In javascript, functions are first class citizens. This means that they can be passed as arguments to other functions.
  function doOperation(a, b, op) { //Function that takes two numbers and a function as arguments
    return op(a, b)
  }
  
  console.log(doOperation(1, 2, sum))