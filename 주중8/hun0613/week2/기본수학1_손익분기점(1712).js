// 실패


// check.1 : A = 고정비용
// check.2 : B = 가변비용 (재료비, 인건비)
// check.3 : 총 비용 (A + B)
// check.4 : C = 노트북가격
// check.5 : 판매비용 (C * 대수) -> 총 수입
// check.6 : 손익분기점 -> 최초로 총 수입이 총 비용보다 많아지는 지점

// check.7 : input 첫줄에 A B C 순으로


/*
    0. fixedCost에 Number(input[0])
    0. variableCost에 Number(input[1])
    0. price에 Number(input[2])
    0. 생산대수 count는 0으로 초기화

    1. while문으로 총 수입(price * count)이 총 비용(fixedCost + variableCost)보다 작거나 같을 동안
        1-1. count += 1

    2. console.log(count)
*/

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split(' ');

// 0. fixedCost에 Number(input[0])
// 0. variableCost에 Number(input[1])
// 0. price에 Number(input[2])
// 0. 생산대수 count는 0으로 초기화
let fixedCost = Number(input[0]);
let variableCost = Number(input[1]);
let price = Number(input[2]);
let count = 0;

// 1. while문으로 총 수입(price * count)이 총 비용(fixedCost + variableCost)보다 작거나 같을 동안
//     1-1. count += 1

// while((price * count) <= (fixedCost + variableCost * count)){

//     // console.log((price * count), (fixedCost + variableCost * count));
//     count++;
// }

// // 2. console.log(count)
// console.log(count);




// let endTime = new Date().getTime();
// console.log(endTime - startTime);

if(variableCost >= price){
    console.log(-1);
}else{
    let answer = Math.floor(fixedCost / (price - variableCost) + 1);
    console.log(answer);
}
