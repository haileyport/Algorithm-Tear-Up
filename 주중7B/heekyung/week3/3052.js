//풀이 1번
// const input = require('fs').readFileSync('/dev/stdin').trim().toString().split('\n').map(Number);
// let count = 10;
// for ( i = 0; i < input.length; i++) {
//     let lastNum = input[i] % 42;
//     for(j = i+1; j < input.length; j++){
//         let num = input[j] % 42
//         if( num === lastNum ) {
//             count--;
//             break
//         }
//     }
// }
// console.log(count)

//풀이 2번
// const input = require('fs').readFileSync('/dev/stdin').trim().toString().split('\n').map(Number);

// let num = []

// num = input.map((a)=> a%42);
// function getUniques(array) {
//     return [... new Set(array)];
// }

// console.log(getUniques(num).length)

// 두 풀이 모두 정답이 나온다. .trim()을 사용하지않아서 틀렸습니다가 떴던 것이었다.