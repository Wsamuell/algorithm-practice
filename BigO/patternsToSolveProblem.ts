// what is an algorthm
// A process or set of steps to accomplish a certain task

// counts the number of chars in a string
const splitString = (string: string): {} => {
  let returnObj: { [key: string]: number } = {};

  for (let char of string) {
    returnObj[char] >= 1 ? returnObj[char]++ : (returnObj[char] = 1);
  }

  return returnObj;
};
// console.log(splitString('Yo pierce'));

// const countString = (string: string): {} => {
//   let objCount: { [key: string]: number } = {};
//   for (let i = 0; i < string.length; i++) {
//     let currentChar = string[i];
//     objCount[currentChar] >= 1
//       ? objCount[currentChar]++
//       : (objCount[currentChar] = 1);
//   }

//   return objCount;
// };
// console.log(countString('Yo piercesiYi'));

const countArrayNum = (arr: number[]): number[] => {
  let returnArr: number[] = new Array(Math.max(...arr) + 1).fill(0);

  for (let item of arr) {
    returnArr[item]++;
  }

  return returnArr;
};
// console.log(countArrayNum([1, 5, 13, 6, 2, 4, 2, 4, 3, 1, 4, 5]));

const countArrayNumber = (arr: number[]): number[] => {
  let returnedArray = new Array(Math.max(...arr) + 1).fill(0);
  console.log(returnedArray);
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    returnedArray[currentNum]++;
  }
  return returnedArray;
};
// console.log(countArrayNumber([1, 5, 13, 6, 2, 4, 2, 4, 3, 1, 4, 5]));

// Frequency Counters
// pattern used objects or sets to collect values

const freqCounter = (arr1: number[], arr2: number[]): boolean => {
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i] ** 2)) {
      return false;
    }
  }
  return true;
};

// console.log(freqCounter([1, 2, 4, 5], [1, 4, 16, 25, 26]));

// const freqcount = (arr1: number[], arr2: number[]): boolean => {
//   const freqcount: { [key: string]: number } = {};
//   for (let i = 0; i < arr2.length; i++) {
//     let currentNum = arr2[i];
//     freqcount[currentNum] >= 1
//       ? freqcount[currentNum]++
//       : (freqcount[currentNum] = 1);
//   }
//   for (let num of arr1) {
//     let getSquared = num ** 2;
//     if (!freqcount[getSquared]) {
//       return false;
//     }
//   }

//   return true;
// };
// console.log(freqcount([1, 2, 4, 5, 6], [1, 4, 16, 25, 26]));

// const anagramCounter = (string1: string, string2: string): boolean => {
//   if (string1.length !== string2.length) return false;

//   for (let char of string2) {
//     if (!string1.includes(char)) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(anagramCounter('undefined', 'denifedenn'));

const analogCounter2 = (string1: string, string2: string): boolean => {
  let freqObj: { [key: string]: number } = {};
  for (let i = 0; i < string2.length; i++) {
    let currVal = string2[i];
    freqObj[currVal] >= 1 ? freqObj[currVal]++ : (freqObj[currVal] = 1);
  }
  console.log(freqObj);
  for (let char of string1) {
    console.log(freqObj[char]);
    if (!freqObj[char] || freqObj[char] === 0) {
      return false;
    } else {
      freqObj[char]--;
    }
  }
  return true;
};
// console.log(analogCounter2('undefineeed', 'denifedeunn'));

// const sumZero = (arr: number[]): number[] | undefined => {
//   let leftPointer = 0;
//   let rightPointer = arr.length - 1;
//   while (leftPointer < rightPointer) {
//     let sum = arr[leftPointer] - arr[rightPointer];
//     if (sum === 0) {
//       return [arr[leftPointer], arr[rightPointer]];
//     } else if (sum > 0) {
//       rightPointer--;
//     } else leftPointer++;
//   }
//   return undefined;
// };

// the sumZero in this assumes the array is a sorted non negative number
const sumZero = (arr: number[]): number | null => {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  while (leftPointer < leftPointer) {
    let sum = arr[leftPointer] - arr[rightPointer];
    if (sum === 0) {
      console.log('GOT U!');
      return arr[leftPointer], arr[rightPointer];
    } else if (sum > 0) {
      rightPointer--;
    } else leftPointer++;
  }

  return null;
};

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));

const countUnique = (arr: number[]): number => {
  const set = new Set(arr);

  return set.size;
};
// console.log(countUnique([1, 1, 3, 4, 52, 12, 32, 1, 2, 2, 2, 2, 2, 2, 2]));

const countUniqueNonSet = (arr: number[]): number => {
  let uniqueObj: { [key: string]: number } = {};

  for (let i = 0; i < arr.length; i++) {
    let currentVal = arr[i];
    console.log('currentVal:', currentVal);
    uniqueObj[currentVal] >= 1
      ? (uniqueObj[currentVal] = 1)
      : (uniqueObj[currentVal] = 1);
    console.log(uniqueObj);
  }

  let totalUnique = Object.keys(uniqueObj).length;
  return totalUnique;
};

// console.log(
//   countUniqueNonSet([1, 1, 3, 4, 52, 12, 32, 1, 2, 2, 2, 2, 2, 2, 2])
// );
// console.log(countUniqueNonSet([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

const grabUniqueItem = (arr: number[]): number[] | undefined => {
  if (arr.length === 0) return [];
  let totalUnique: number[] = new Array();
  let leftPointer = 0;
  let rightPointer = 1;
  totalUnique.push(arr[0]);
  while (rightPointer < arr.length) {
    if (arr[leftPointer] === arr[rightPointer]) {
      rightPointer++;
    } else {
      totalUnique.push(arr[rightPointer]);
      leftPointer = rightPointer;
      rightPointer++;
    }
  }
  return totalUnique;
};
// console.log(grabUniqueItem([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

const grabUniquePractice = (arr: number[]): number[] => {
  let uniqueObj: { [key: string]: number } = {};

  for (let i = 0; i < arr.length; i++) {
    let currentVal = arr[i];
    console.log('currentVal:', currentVal);
    uniqueObj[currentVal] >= 1
      ? (uniqueObj[currentVal] = 1)
      : (uniqueObj[currentVal] = 1);
    console.log(uniqueObj);
  }

  let totalUnique = Object.keys(uniqueObj).map((item) => parseInt(item));

  return totalUnique;
};
// console.log(grabUniquePractice([]));
// console.log(grabUniquePractice([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

// sliding window Aprroach

const maxSubArray = (arr: number[], n: number): number | null => {
  if (arr.length < n) return null;
  let sum: number = 0;
  let tempSum: number = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  tempSum = sum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    sum = Math.max(tempSum, sum);
  }

  return sum;
};

// console.log(maxSubArray([1, 2, 5, 2, 8, 1, 5], 2));
// console.log(maxSubArray([1, 2, 5, 2, 8, 1, 5], 4));
// console.log(maxSubArray([1, 2, 5, 2, 8, 1, 5], 1));
// console.log(maxSubArray([1, 2, 5, 2, 8, 1, 5], 3));

// const maxSubArrayPractice = (arr: number[], max: number): number => {
//   let sum = 0;
//   let tempSum = 0;
//   for (let i = 0; i < max; i++) {
//     sum += arr[i];
//   }
//   tempSum = sum;
//   for (let i = max; i < arr.length; i++) {
//     tempSum = tempSum - arr[i - max] + arr[i];
//     sum = Math.max(tempSum, sum);
//   }
//   return sum;
// };

// console.log(maxSubArrayPractice([1, 2, 5, 2, 8, 1, 5], 2));
// console.log(maxSubArrayPractice([1, 2, 5, 2, 8, 1, 5], 4));
// console.log(maxSubArrayPractice([1, 2, 5, 2, 8, 1, 5], 1));
// console.log(maxSubArrayPractice([1, 2, 5, 2, 8, 1, 5], 3));
const crappy = (arr: number[], n: number): number | null => {
  let sum = -Infinity;
  for (let i = 0; i < arr.length - n + 1; i++) {
    let newSum = 0;

    for (let j = 0; j < n; j++) {
      newSum += arr[i + j];
    }
    if (newSum > sum) {
      sum = newSum;
    }
  }

  return sum;
};
// console.log(crappy([1, 2, 5, 2, 8, 1, 5], 2));
// console.log(crappy([1, 2, 5, 2, 8, 1, 5], 4));
// console.log(crappy([1, 2, 5, 2, 8, 1, 5], 1));
// console.log(crappy([1, 2, 5, 2, 8, 1, 5], 3));

// Divide and conquer

const sameFrequency = (num1: number, num2: number): boolean => {
  const getNum1String: string = num1.toString();
  const getNum2String = num2.toString();
  let newObject: { [key: string]: number } = {};
  // console.log('checked');
  if (getNum1String.length !== getNum2String.length) return false;
  for (let i of getNum1String) {
    newObject[i] >= 1 ? newObject[i]++ : (newObject[i] = 1);
  }
  console.log(newObject);
  for (let i of getNum2String) {
    if (!newObject[i]) return false;
    newObject[i]--;
  }
  console.log(newObject);
  return true;
};

// console.log(sameFrequency(123, 322));

// const areThereDuplicates = (...args: any[]): boolean => {
//   // let arrayArgs: [] = []
//   let mappedObj: { [key: string]: any } = {};
//   args.map(() => {});
//   let startingIndex = 0;

//   return true;
// };

const areThereDuplicates = (arr: number[]): boolean => {
  arr.sort((a, b) => a - b);
  // grab the first item in an array
  let left = 0;
  let right = 1;
  // do a for loop to see if the items in the array match the currentItem outside  the list
  while (right < arr.length) {
    // if it does match return false
    if (arr[left] === arr[right]) {
      return true;
    } else {
      left++;
      right++;
      // if it doesnt match increase the currentItem then increase the current item number++
      //  question here is how do i get the loop to restart after the first iteration if its false
    }
  }
  return false;
};
// console.log(areThereDuplicates([1, 2, 7, 4, 5, 6, 7]));
const areThereDuplicatePractice = (arr: number[]): boolean => {
  let objCount: { [key: string]: number } = {};

  for (let i = 0; i < arr.length; i++) {
    let currVal = arr[i];
    if (objCount[currVal] === 1) {
      return true;
    } else objCount[currVal] = 1;
  }
  return false;
};
// console.log(areThereDuplicatePractice([1, 2, 7, 4, 5, 6, 7]));0

const averagePair = (arr: number[], ave: number): boolean => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let calculateAve = (arr[left] + arr[right]) / 2;
    console.log('avg:', ave, 'newAve:', calculateAve);
    if (calculateAve === ave) {
      return true;
    } else if (calculateAve > ave) {
      right--;
    } else left++;
  }

  return false;
};
// console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
// console.log(averagePair([], 4)); // false)

const averagePairPractice = (arr: number[], average: number): boolean => {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  while (leftPointer < rightPointer) {
    let averageFound = arr[leftPointer] + arr[rightPointer] / 2;
    if (averageFound === average) {
      return true;
    } else if (averageFound > average) {
      rightPointer--;
    } else leftPointer++;
  }
  return false;
};
// console.log(averagePairPractice([1, 2, 3], 2.5)); // true
// console.log(averagePairPractice([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
// console.log(averagePairPractice([-1, 0, 3, 4, 5, 6], 4.1)); // false
// console.log(averagePairPractice([], 4)); // false)
const isSubsequence = (string1: string, string2: string): boolean => {
  let currVal: number = 0;
  // loop through the second string
  for (let i = 0; i < string2.length; i++) {
    console.log(string1[currVal], string2[i]);
    if (string1[currVal] === string2[i]) {
      // if the currcurrVal exist in the second string at the current index move currval up one
      currVal++;
    }
  }
  // if it doesnt move both pointers
  return currVal === string1.length;
};
// console.log(isSubsequence('cake', 'scoake'));

const isSubsequencePractice = (string1: string, string2: string): boolean => {
  let length = 0;
  for (let i = 0; i < string2.length; i++) {
    if (string1[length] === string2[i]) length++;
  }
  return length === string1.length;
};

// console.log(isSubsequencePractice('cake', 'scake'));

const maxSubarraySum = (arr: number[], length: number): number | null => {
  if (arr.length < length) return null;
  let maxSum: number = 0;
  let tempSum = 0;

  for (let i = 0; i < length; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = length; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - length];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
};
// console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
// console.log(maxSubarraySum([2, 3], 3)); // null

const maxSubArraySumPractice = (arr: number[], max: number): number | null => {
  if (arr.length < max) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < max; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = max; i < arr.length; i++) {
    tempSum = tempSum - arr[i - max] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};
// console.log(maxSubArraySumPractice([100, 200, 300, 400], 2)); // 700

const minSubArrayLen = (arr: number[], value: number): number => {
  let left = 0;
  let right = 0;
  let currSum = 0;
  let min = Infinity;

  // loops through the array to see if any of the char is great than

  while (left < arr.length) {
    if (currSum < value && right < arr.length) {
      currSum += arr[right];
      right++;
    } else if (currSum >= value) {
      min = Math.min(min, right - left);
      currSum -= arr[left];
      left++;
    } else {
      break;
    }
  }
  return min === Infinity ? 0 : min;
};
// console.log(
//   minSubArrayLen([2, 3, 1, 2, 4, 3], 7) // 2 -> because [4,3] is the smallest subarray
// );
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0

const minSubArrayLenPractice = (arr: number[], len: number): number => {
  let minLen = Infinity;
  let leftPointer = 0;
  let rightPointer = 0;
  let sum = 0;

  while (leftPointer < arr.length) {
    if (sum < len && rightPointer < arr.length) {
      sum += arr[rightPointer];
      rightPointer++;
    } else if (sum >= len) {
      minLen = Math.min(minLen, rightPointer - leftPointer);
      sum -= arr[leftPointer];
      leftPointer++;
    } else {
      break;
    }
  }
  return minLen;
};

// console.log(
//   minSubArrayLenPractice([2, 3, 1, 2, 4, 3], 7) // 2 -> because [4,3] is the smallest subarray
// );

// const findLongestSubstring = (string: string): number => {
//   let total = 0;
//   let left = 0;
//   let charObj: { [key: string]: number } = {};

//   for (let right = 0; right < string.length; right++) {
//     let currChar = string[right];
//     console.log('currChar:', currChar);
//     if (currChar in charObj && charObj[currChar] >= left) {
//       left = charObj[currChar] + 1;
//       console.log(charObj);
//     }
//     console.log('left:', left, 'right:', right);
//     charObj[currChar] = right;
//     total = Math.max(total, right - left + 1);
//   }

//   return total;
// };

const findLongestSubstring = (string: string): number => {
  let total = 0;
  let left = 0;
  let uniqueObj: { [key: string]: number } = {};

  for (let right = 0; right < string.length; right++) {
    const currChar = string[right];
    if (currChar in uniqueObj && uniqueObj[currChar] >= left) {
      left = uniqueObj[currChar] + 1;
    }
    uniqueObj[currChar] = right;
    total = Math.max(total, right - left + 1);
  }

  return total;
};

// console.log(findLongestSubstring('')); // 0
// console.log(findLongestSubstring('rithmschool')); // 7
// console.log(findLongestSubstring('thisisawesome')); // 6
// console.log(findLongestSubstring('thecatinthehat')); // 7
// console.log(findLongestSubstring('bbbbbb')); // 1
// console.log(findLongestSubstring('longestsubstring')); // 8
// console.log(findLongestSubstring('thisishowwedoit')); // 6

const findLongestSubstringPractice = (string: string): number => {
  let longestLen = 0;
  let stringObj: { [key: string]: number } = {};
  let left = 0;

  for (let i = 0; i < string.length; i++) {
    const currChar = string[i];
    if (currChar in stringObj && stringObj[currChar] >= left) {
      left = stringObj[currChar];
    }
    stringObj[currChar] = i;
    longestLen = Math.max(longestLen, i - left);
  }

  return longestLen;
};

// console.log(findLongestSubstringPractice('')); // 0
console.log(findLongestSubstringPractice('rithmschool')); // 7
// console.log(findLongestSubstringPractice('thisisawesome')); // 6
// console.log(findLongestSubstringPractice('thecatinthehat')); // 7
// console.log(findLongestSubstringPractice('bbbbbb')); // 1
// console.log(findLongestSubstringPractice('longestsubstring')); // 8
// console.log(findLongestSubstringPractice('thisishowwedoit')); // 6
