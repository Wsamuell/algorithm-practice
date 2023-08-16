"use strict";
// What is big O ?
// Its a way of comparing code to other peices of code
// Numeric representation of code
const addUpto = (number) => {
    // this doesnt make sense yet
    return (number * (number + 1)) / 2;
};
// time complexity
// as n grows, the number of operation grows
// Official intro
//  Big O Notation is a way to formalize fuzzy counting
// O(1): this means that the function expression runtime is not affected (constant)
// O(n): this means that the function is affected Linear
// O(n^2): exponential curve much slower
// Rules:
// Arithemetic Operations are constant : (-=%*)
// variables assignments are also constant
// accessing element inside an array is constant
// in a loop the complexity is the length of the loop
// space complexity
// the amount of memory thats taken up
// Rules:
// most primatives are constant
// strings are O(n)
// Logarithm
// log2(8) =3 <===> 2^3 =8
// Objects and Arrays
// insertion, removal and acess are all O(1) for an object because you have a key value pair to do the operation.
// searching on the other hand is O(n)
// objects are really quick but there is no order
// Arrays has alot of uncertainty to it
// accessing item is Object(1) because you look it up by the index
// searching is O(n) while inserting and removal depends on where you are performing the operation( push or pop)
