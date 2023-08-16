"use strict";
// What is Recursion
// A process that call s itself
const countDown = (number) => {
    if (number <= 0) {
        console.log('All done');
        return;
    }
    console.log(number);
    number--;
    countDown(number);
    // return number <= 0 ? console.log('All done') : countDown(number - 1);
};
// console.log(countDown(5));
const factorial = (number) => {
    if (number <= 1)
        return 1;
    return number * factorial(--number);
};
// console.log(factorial(4));
// common practice or problems that happens with recursion
//  Base case coud be wrong leading to growing stack
// returning the wrong thing is common
// Helper method recursion
// Problems to solve
const power = (base, exponent) => {
    if (exponent <= 0) {
        return 1;
    }
    return base * power(base, --exponent);
};
// console.log(power(2, 4));
const productOfArray = (arr) => {
    if (arr.length === 0)
        return 1;
    return arr[0] * productOfArray(arr.slice(1));
};
// console.log(productOfArray([1, 3, 4, 5]));
const recursiveRange = (number) => {
    if (number === 1)
        return 1;
    return number + recursiveRange(--number);
};
const nonRec = (nth) => {
    if (nth <= 0)
        return 0;
    if (nth === 1)
        return 1;
    let prev = 0;
    let current = 1;
    for (let i = 2; i <= nth; i++) {
        let nextNum = prev + current;
        console.log(nextNum);
        prev = current;
        current = nextNum;
    }
    return current;
};
// nonRec(5);
const fib = (nth) => {
    if (nth <= 0)
        return 0;
    if (nth === 1)
        return 1;
    return fib(nth - 1) + fib(nth - 2);
};
