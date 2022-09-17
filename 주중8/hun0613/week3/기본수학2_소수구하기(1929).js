let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split(' ');

const min = parseInt(input[0]);
const max = parseInt(input[1]);


// 1차 시도

// 1. min에 input[0]
// 2. max에 input[1]
// 3. 소수를 판별할 isPrime = true로 초기화
// 3. for문으로 i는 min부터 max까지 1씩 증가하면서
    // 3-1. for문으로 j는 2부터 i의 제곱근까지
        // 3-1-1. i % j === 0 이라면
            // 3-1-1-1. isPrime = false
            // 3-1-1-2. break;
        // 3-1-2. 그렇지않다면
            //3-1-2-1. isPrime = true;
        // 3-1-3. 만약 isPrime이 true라면
            // 3-1-3-1. i 출력



// 성공..? 왜..?
// memory : 16968KB
// time : 4184ms

// let isPrime = true;

// for (let i = min; i <= max; i++){
//     if(i === 1){
//         continue;
//     }
//     for (let j = 2; j <= Math.sqrt(i); j++){
//         // console.log(i, j)
//         if (i % j === 0){
//             // console.log(i,j)
//             isPrime = false;
//             break;
//         }else{
//             isPrime = true;
//             // console.log(i, j)
//         }
//     }
//     if(isPrime === true){
//         console.log(i);
//     }
// }








// 2차시도
// memory : 17184KB
// time : 3916ms


// 1. 1이 아니면서 홀수인 수 이거나, 2라면
    //1-1. isPrime은 true
    // 1-2. for문으로 3부터 i의 제곱근까지 2씩 증가하면서 (이미 홀수이므로 3부터 홀수만 나눠봄)
        // 1-2-1. 만약 나머지가 0이라면
            // 1-2-1-1. isPrime은 false 후 break
            

    
for (let i = min; i <= max; i++){
    if((i !== 1 && i % 2 === 1) || i === 2){
        isPrime = true;
        for(let j = 3; j<= Math.floor(Math.sqrt(i)); j += 2){
            if(i % j === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            console.log(i);
        }
    }
}







// 에라토스테네스의 체

// 시간초과 실패

// let startTime = new Date().getTime();

// let numArr = [];

// for (let i = min; i <= max; i++){
//     numArr.push(i);
// }

// if(numArr[0] === 1){
//     numArr.splice(0,1,false)
// }

// for (let i = 0; i < numArr.length; i++){
//     if(numArr[i] === 1){
//         numArr.splice(0,1,false)
//         continue;
//     }

//     if(numArr[i] !== 2 && numArr[i] % 2 === 0){
//         // numArr.splice(i,1,false)
//         numArr[i] = false;
//     }

//     if(numArr[i]){
//         // console.log('numArr[i]는' + numArr[i]);
//         // console.log(numArr[i])
//         for(let j = numArr[i]; i + j <= numArr.length; j += numArr[i]){
//             // console.log(i + j, j)
//             if(numArr[i + j]){
//                 numArr[i + j] = false;
//             }
//         }
//         console.log(numArr[i]);
//     }
    
    
// }

// let endTime = new Date().getTime();
// console.log(endTime-startTime)
