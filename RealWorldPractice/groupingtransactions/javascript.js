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
 * Complete the 'groupTransactions' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY transactions as parameter.
 */

function groupTransactions(transactions) {
  // Write your code here
  const itemCount = {};
  //   start from the second item
  for (let i = 1; i < transactions.length; i++) {
    const item = transactions[i];
    if (!itemCount[item]) {
      itemCount[item] = 1;
    } else itemCount[item]++;
  }

  // once the array of entries are created we now want to sort
  const sortedTransaction = Object.entries(itemCount)
    .sort((a, b) => {
      const [itemA, countA] = a;
      const [itemB, countB] = b;

      if (countB !== countA) {
        // descending order
        return countB - countA;
      } else {
        return itemA.localeCompare(itemB);
      }
    })
    .map(([item, count]) => {
      `${item} ${count}`;
    });
  transactions = sortedTransaction;
  return transactions;
}

function main() {
  const ws = process.stdout;

  const transactionsCount = parseInt(readLine().trim(), 10);

  let transactions = [];

  for (let i = 0; i < transactionsCount; i++) {
    const transactionsItem = readLine();
    transactions.push(transactionsItem);
  }

  const result = groupTransactions(transactions);

  ws.write(result.join('\n') + '\n');

  ws.end();
}
