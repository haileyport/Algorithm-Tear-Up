let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

const testCase = input.shift();
console.log(input.sort((a,b) => a-b).join('\n'))

//b-a 하면 반대로 정렬됨
//sort() 와 다른점은 무엇인가

// 이해되지 않은 퀵정렬
// const result = quickSortStarter(input).join('\n')
// function quickSortStarter(arr){
//     if(!arr.length){
//         return arr
//     }
//     return quickSort(arr, 0, arr.length-1)
// }
// function quickSort(arr, i , length){
//     const pivot = arr[Math.floor((i+length)/2)];
//     let left = i;
//     let right = length;

//     while(left <= right){
//         while(arr[left] < pivot) left++
//         while(arr[right]>pivot) right--

//         if(left<=right){
//             const temp = arr[left]
//             arr[left] = arr[right];
//             arr[right] = temp;
//             left++
//             right--
//          }
//      }
//      if(i < right) quickSort(arr, i , right);
//      if (i > left ) quickSort(arr, left, length)
 
//      return arr;
// }

