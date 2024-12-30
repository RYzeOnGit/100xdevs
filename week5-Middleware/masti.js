// map, filter, arrow functions

//arrow function implementation
const sum = (a,b) => a + b;
console.log(sum(2,3)); // 5
 //map implementation
const arr = [1,2,3,4,5];

// Kind of like linear alg where u create a transformation :)
function transform(x){
    return x * 2;
}  
const arr2 = arr.map(transform);
console.log(arr2); // [2,4,6,8,10]

//filter implementation
function isEven(x){
    return x % 2 === 0;
}
const ans = arr.filter(isEven);
console.log(ans); // [2,4]