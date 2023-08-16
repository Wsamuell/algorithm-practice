"use strict";
// Insertion Sort
const insertionSort = (arr) => {
    // for (let i = 1; i < arr.length; i++) {
    //   let currentVal = arr[i];
    //   let j = i - 1;
    //   while (j >= 0 && arr[j] > currentVal) {
    //     arr[j + 1] = arr[j];
    //     j--;
    //     console.log(arr);
    //   }
    //   arr[j + 1] = currentVal;
    //   // console.log(arr);
    // }
    for (let i = 1; i < arr.length; i++) {
        let currVal = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > currVal) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currVal;
    }
    return arr;
};
// console.log(insertionSort([2, 1, 9, 76, 4]));
const insertionSortPractice = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
};
// console.log(insertionSortPractice([2, 1, 9, 76, 4]));
const fibRedo = (nth) => {
    if (nth === 0)
        return 0;
    if (nth === 1)
        return 1;
    let prev = 0;
    let currChar = 1;
    for (let i = 2; i <= nth; i++) {
        let nextVal = prev + currChar;
        prev = currChar;
        currChar = nextVal;
    }
    return currChar;
    // recursively
    // return fibRedo(--nth) + fibRedo(nth - currChar);
};
// console.log(fibRedo(20));
const reverseArray = (a) => {
    // Write your code here
    let reversed = [];
    for (let i = a.length - 1; i >= 0; i--) {
        reversed.push(a[i]);
    }
    return reversed;
};
console.log(reverseArray([1, 4, 3, 2]));
const insertionPractice2 = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
};
