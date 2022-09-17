
let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const testCase = input.shift()

let age = input.map(v=>v.split(' '))
// for(i=0; i<age.length; i++){

//     let swap;
//     for(j =0 ; j<age.length-1-i; j++){
//         if(age[j][0]>age[j+1][0]){
//             swap = age[j];
//             age[j] = age[j+1];
//             age[j+1]=swap
//         }
//     }
// }

// console.log(age.map(v=>v.join(' ')).join('\n'))

//버블정렬 이용 > 시간초과

for(i=0; i<age.length; i++){
    let cur = age[i];
    let left = i-1

    while(left>=0 && age[left][0]>cur[0]){
        age[left+1] = age[left]
        age[left] = cur
        cur = age[left]
        left--
    }
}
console.log(age.map(v=>v.join(' ')).join('\n'))
//삽입정렬도 시간초과