// 나머지 값이 0이 되는 수들만 배열에 추가한다
// 그 배열의 값들이 소수인지 판별 후
// 입력 받은 숫자를 소수들로만 작은 수부터 나누고 나눈 값이 0이라면 
// 콘솔 로그로 한 줄씩 출력한다
//실패 

//에라토스테네스의 체로 인해서 2부터 나누기 시작하면 
//자동적으로 소수가 아닌 수들은 걸러지기 때문에 과정이 간단해진다!!

let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().split(' ');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

//실패
// const aliquot = [];
// let n = 2;
// while(n<= Number(input)){
//     if(Number(input)%n === 0){
//         aliquot.push(n)
//     }
//     n++
// }

// let primeFactor = [];

// for(let i of aliquot){
//     for(let m=2; m< i; m++){
//         if(i%m === 0){
//             return false
//         }
//     }
//     primeFactor.push(i)
// }

// console.log(primeFactor.length); 

let result = Number(input);
for(let n = 2; n <= result;){ 
    if(result%n === 0){ 
        result = result/n 
        console.log(n); 
    }else{
        n++;
    }
}