// Selection sort

// const selectionSort = (arr: number[]): number[] => {
//   const swap = (arr: number[], inx1: number, inx2: number) => {
//     [arr[inx1], arr[inx2]] = [arr[inx2], arr[inx1]];
//   };
//   for (let i = 0; i < arr.length; i++) {
//     let lowestIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[lowestIndex]) {
//         lowestIndex = j;
//         console.log(lowestIndex);
//       }
//     }
//     if (i !== lowestIndex) {
//       swap(arr, i, lowestIndex);
//     }
//   }

//   return arr;

// };

const selectionSort = (arr: number[]): number[] => {
  const swap = (arr: number[], inx1: number, inx2: number) => {
    [arr[inx1], arr[inx2]] = [arr[inx2], arr[inx1]];
  };
  for (let i = 0; i < arr.length; i++) {
    let lowestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowestIndex]) {
        lowestIndex = j;
      }
    }
    if (arr[i] !== arr[lowestIndex]) {
      swap(arr, i, lowestIndex);
    }
  }
  return arr;
};

console.log(selectionSort([1, 2, 3, 5, 6, 9, 3, 1, 8]));
