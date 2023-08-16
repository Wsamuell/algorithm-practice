"use strict";
// What is a searching algorithm
// Linear search is looking at each item in a list and seeing if the item you are looking for is in there
const linearSearch = (arr, val) => {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (val === arr[i])
            return i;
    }
    return index;
};
// Binary Search: much faster we can eliminate half of the elements at a time
// Only works on sorted array
const binarySearch = (arr, val) => {
    let index = -1;
    let leftPointer = 0;
    let rightPointer = arr.length - 1;
    while (leftPointer <= rightPointer) {
        const middlePointer = Math.floor((leftPointer + rightPointer) / 2);
        console.log(middlePointer);
        if (val === arr[middlePointer]) {
            return middlePointer;
        }
        else if (val < arr[middlePointer]) {
            rightPointer = middlePointer - 1;
        }
        else {
            leftPointer = middlePointer + 1;
        }
    }
    return index;
};
// console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
// console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
// console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
// console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     10
//   )
// ); // 2
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     95
//   )
// ); // 16
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     100
//   )
// ); // -1
