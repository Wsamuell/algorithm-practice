"use strict";
// Challenge
// Assign every lowercase letter a value, from 1 for a to 26 for z. Given a string of lowercase letters, find the sum of the values of the letters in the string.
// lettersum("") => 0
// lettersum("a") => 1
// lettersum("z") => 26
// lettersum("cab") => 6
// lettersum("excellent") => 100
// lettersum("microspectrophotometries") => 317
let sum = (s) => {
    return s.split('').reduce((sum, curr) => sum + curr.charCodeAt(0) - 96, 0);
};
console.log(sum('microspectrophotometries'));
