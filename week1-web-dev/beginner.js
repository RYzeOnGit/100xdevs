// Interpreted language - Python, JavaScript, Ruby, PHP, etc. Code runs line by line.\
// issue with interpreted languages is that they are slower than compiled languages and more prone to runtime errors.

// Dynamically typed language - JavaScript, Python, Ruby, etc. Variables are not declared with a type and can be changed.

var a = 1;
console.log(a);
var a = "Hello";
console.log(a);

// JIT - Just In Time compilation - is a technique that compiles the code just in time, as the program is executed.
// Js is a single threaded language and runs in a single thread. This means that it can only execute one task at a time. 
// Hence, it can use one cpu core at a time.
// The consequence of this is that if one task takes a long time to complete, the entire program will be blocked.

// Ram is where the program is stored in memory. This is where the program is executed.
// the garbage collector is a program that frees up memory that is no longer used by the program.

// variable can be declared with var, let, const.
var a = 1; // var is function scoped, let and const are block scoped.
let b = 2; // let can be updated, const cannot be updated.
const c = 3; // const cannot be updated or redeclared.

// primitive data types - number, string, boolean, null, undefined, symbol.
let number = 1;
let string = "Hello";
let boolean = true;
let names = ["John", "Jane", "Jim"]; // array is a collection of values.



