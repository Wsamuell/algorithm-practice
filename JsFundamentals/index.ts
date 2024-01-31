// Function Declaration
// declaring a function by using the function keywork, this makes it easier for hoisting in the event you need to call a function before it is declared
function returnString(s: string) {
  console.log(s);
}

// function expression
// declaring a function using const
const numPlus1 = (n: number) => {
  return n + 1;
};

// first class function
// functions that can be treated as a variable
function square(num: number) {
  return num * num;
}
function displaySquare(fn: (num: number) => void) {
  console.log('Square root is' + fn(6));
}

// anonymous function
const riceball = () =>
  function (b: string) {
    return b;
  };

// IIFE
// Imediately invoked function expression
(function returnString2(string: string) {
  console.log(string);
})('Walla Cam');

// Scope
// The context in which variables are available to be used either globally or locally
let num1 = 20,
  num2 = 30,
  num3 = 40;

function multiply() {
  return num1 * num2;
}

// hoisting
// function is initially and pulld to the top on load
// this only works with function declaration and not function expression

scream();
function scream() {
  console.log('AHHHHHHHHHH');
}

// Params Vs Arguments
// Params are values you pass into functions when defining them
// Arguments are values you pass when calling a function
function named(s: string) {
  // Param
  console.log(s);
}
named('sam'); //Argument

// Callback function
// function passed into another function as an argument
// they deploy after the first function have been completed

document.addEventListener('click', function (e) {
  console.log(this.getElementsByClassName);
});

setTimeout(() => {
  named('Some random name');
}, 2000);

// Arrow functions
// introduced in ES6
const subbtract = (num1: number, num2: number) => {
  return num1 - num2;
};

// closure
// function that references variable in the outer scope from inner scope

// lexical scope
// variable outside a scope thats accessible inside a function
function init() {
  var name = 'Yam';

  function display() {
    return console.log(name);
  }
}

// init()();
// display is a closure becuause value of name is still avalble from outside to its params

// closure scope chain

function createBase(num: number) {
  return function (innerNum: number) {
    innerNum + num;
  };
}

var addSix = createBase(6);

addSix(10);
addSix(15);

// var is function scoped rather than block scope
// let is bock scope

// using closure to create a private counter

function counter() {
  var _counter = 0; // private

  function add(argument: number) {
    _counter += argument;
  }

  function retrieve() {
    return 'Counter = ' + _counter;
  }

  return { add, retrieve };
}

const count = counter();

count.add(5);
count.add(15);

// module pattern
// patterns that keep functions private and public seperated by return so users only have access to public interfaces
// also its an IIFE

var module = (function () {
  function _private() {
    console.log('private');
  }

  return {
    public: function () {
      console.log('public');
    },
  };
})();

// module.private()  this wont run because its not part of the return statement
module.public();

//memoize function

// function myMemoize(fn: () => void) {
//   const res = {};
//   return function (...args: number[]) {
//     var argcache = JSON.stringify(args);
//     if (!res[argcache]) {
// res[argsCache] = fn.call(contexr || this, ...argd)
//     } else {
//       return res[argcache];
//     }
//   };
// }

// currying
// function that takes one argument at a time expecting a next argument
function notcurr(a: number, b: number) {
  console.log(a, b);
}
function curr(a: number) {
  return function (b: number) {
    return { a, b };
  };
}
console.log(curr(1)(2));

// why should you curry
// to avoid passing the same variable over and over
// to create higher order function(function that accepts other functions as variable)

// to make your code less prone to errors

function sumed(a: number) {
  return function (b: number) {
    return function (c: number) {
      return a + b + c;
    };
  };
}
// sumed(4)(4)(2);

// infinite currying
function sums(n: number) {
  return function (b: number) {
    if (b) return sums(n + b);
    return n;
  };
}
// const result = sums(1)(2)(4)(5);

// partial application
// function that is called with only half of the params it needs

// Dom Manipulation curry
function updateText(id: string) {
  return function (content: string) {
    document.querySelector('#' + id)!.textContent = content;
  };
}

const updateHeader = updateText('heading');
updateHeader('Ya boy Sammy');

// convert to a curry
// this is a little much for me
function curryfunction(fn: any) {
  return function curredZfunc(...args: number[]) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...next: number[]) {
        return curredZfunc(...args, ...next);
      };
    }
  };
}
