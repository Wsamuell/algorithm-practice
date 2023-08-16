"use strict";
// Sorting Algorithm
// sorting is a way of rearranging the items in a collection
// the way the js sorting algo works is not what i thought  was happening
// sort((a, b) =>a - b)
// so basically whats happening is if a-b is a higher number, it puts it to the right else left
// bubble sort
// the largest value sink to the top
const bubbleSort = (arr) => {
    const swap = (arr, inx1, inx2) => {
        [arr[inx1], arr[inx2]] = [arr[inx2], arr[inx1]];
    };
    let noSwap = false;
    for (let i = arr.length; i > 0; i--) {
        noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            console.log('j:', arr[j], 'j +1:', arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwap = false;
            }
        }
        if (noSwap)
            break;
    }
    return arr;
};
// console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 7]));
const bubblePractice = (arr) => {
    let swap = (arr, index1, index2) => {
        [[arr[index1]], [arr[index2]]] = [[arr[index2]], [arr[index1]]];
    };
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
};
// console.log(bubblePractice([1, 9, 15, 6, 2, 3, 4, 5, 6, 7, 8, 7]));
