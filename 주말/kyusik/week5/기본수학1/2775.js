// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(num => Number(num));
 
// For local test
const input = [2, 1, 3, 2, 3];
const T = input[0];
 
for (let i = 0; i < T; i++) {
  const a = input[2 * i + 1];
  const b = input[2 * i + 2];
  const apartment = [];
  
  for (let i = 0; i <= a; i++) {
    apartment.push([1]);
    console.log(apartment);
      for (let j = 1; j < b; j++) {
        if (i === 0) {
          apartment[i].push(j + 1);
        } else {
          apartment[i].push(apartment[i][j - 1] + apartment[i - 1][j]);
        }
      }
  }
  
  const floor = a;
  const room = b - 1;
  console.log(apartment[floor][room]);
}


// for(let i = 1; i <= T; i++){
//     let floor = parseInt(input[2 * i - 1]);  // 2
//     let n = parseInt(input[2 * i]); // 3
//     let apart = [];
//     for(let j = 0; j <= floor; j++){
//         let people = [];
//         for(let k = 1; k <= n; k++){
//             if(apart.length === 0){
//                 people.push(k);
//                 //[1, 2, 3]
//             }else{
//                let sum = 0;
//                sum = sum + apart[j - 1][k - 1]
//                people.push(sum);
//                //[1, 3, 6]
//                //[1, 5, 10]
//             }
//         }
//         apart.push(people);
//         //[ [1, 2, 3] ]
//         //[ [1, 2, 3], [1, 3, 6] ]
//         //[ [1, 2, 3], [1, 3, 6], [1, 5, 10] ]
//         //결과 : 10 -> apart[floor][n - 1]
//     }
//     console.log(apart);
// }

/* 
0층
1 2 3 4 5 6 7 8 9 ...
1층
1 3 6 10 15 21 28 36 45
2층
1 4 10 20 35 56 84 120 165
3층
1 5 15 35 70 126
4층
1 6 21 56 126 252

i=0
j
people = j
i=1
people = i=0일때 j까지의 합
*/