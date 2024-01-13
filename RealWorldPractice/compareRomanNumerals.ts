// [2021-07-05] Challenge #397 [Easy] Roman numeral comparison

// For the purpose of today's challenge, a Roman numeral is a non-empty string of the characters M, D, C, L, X, V, and I, each of which has the value 1000, 500, 100, 50, 10, 5, and 1. The characters are arranged in descending order, and the total value of the numeral is the sum of the values of its characters. For example, the numeral MDCCXXVIIII has the value 1000 + 500 + 2x100 + 2x10 + 5 + 4x1 = 1729.

// This challenge uses only additive notation for roman numerals. There's also subtractive notation, where 9 would be written as IX. You don't need to handle subtractive notation (but you can if you want to, as an optional bonus).

// Given two Roman numerals, return whether the first one is less than the second one:

// numcompare("I", "I") => false
// numcompare("I", "II") => true
// numcompare("II", "I") => false
// numcompare("V", "IIII") => false
// numcompare("MDCLXV", "MDCLXVI") => true
// numcompare("MM", "MDCCCCLXXXXVIIII") => false

let romanNumeral: { [key: string]: number } = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};
// let test = Object.create(romanNumeral)
// console.log(romanNumeral.V)

const romanComparision = (s1: string, s2: string): boolean => {
  const tally = (s: string): number => {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      count += romanNumeral[s[i]];
    }
    return count;
  };
  // console.log(tally(s1), tally(s2))
  return tally(s1) < tally(s2);
};

console.log(romanComparision('MM', 'MDCCCCLXXXXVIIII'));
