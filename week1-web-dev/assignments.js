function canvote(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}
console.log(canvote(18));
console.log(canvote(17));