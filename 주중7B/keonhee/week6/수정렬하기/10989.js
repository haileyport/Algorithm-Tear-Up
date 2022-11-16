const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const arr = input.slice(1).map(Number);

function solution(N, arr) {
  // Quick sort

  function quickSort(arr) {
    if (arr.length < 2) {
      return arr;
    }

    const pivot = [arr[0]];

    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else if (arr[i] > pivot) {
        right.push(arr[i]);
      } else {
        pivot.push(arr[i]);
      }
    }

    // console.log(`left: ${left}, pivot: ${pivot}, right: ${right}`);

    return quickSort(left).concat(pivot, quickSort(right));
  }

  console.log(quickSort(arr));
}

solution(N, arr);
