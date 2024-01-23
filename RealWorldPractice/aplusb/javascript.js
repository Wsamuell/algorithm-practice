'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'aPlusB' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY transactions as parameter.
 */

function aPlusB(lines) {
  // Write your code here
  const returnArr = [];
  for (const line of lines) {
    const numbers = line.split(' ').map(Number);

    const lineTotal = numbers.reduce((sum, num) => sum + num, 0);
    returnArr.push(String(lineTotal));
  }

  return returnArr;
}

function main() {
  const ws = process.stdout;

  const linesCount = parseInt(readLine().trim(), 10);

  let lines = [];

  for (let i = 0; i < linesCount; i++) {
    const line = readLine();
    lines.push(line);
  }

  const result = aPlusB(lines);

  ws.write(result.join('\n') + '\n');

  ws.end();
}
