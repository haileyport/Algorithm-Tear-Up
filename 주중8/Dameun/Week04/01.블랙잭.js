let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//21이 넘지 않는 최고의 합을 만드는 게임(카드는 3장)
//양의 정수 n장의 카드를 모두 내려놓음
//딜러가 숫자 m을 외친다
//제한된 시간 안에 n장중 3장을 골라 m을 넘지 않으면서 m과 최대한 가깝게 만든다

//1. 랜덤한 카드 3장을 뽑을 수 있는 모든 경우의 수의 합을 배열로 입력, 그 배열중 m을 넘지않는 가장 큰 수 찾기 for문
//2. 배열을 가장 큰 수부터 나엻한다. 
//3. 배열에서 M - (가장 작은 수 두 개의 합)보다 큰 수는모두 삭제한다
//4. 3번까지의 과정 후에 1번을 실행한다 > 데이터를 아낄 수 있지 않을까? 

const cardPiece = Number(input[0].split(' ')[0])
const maxNumber = Number(input[0].split(' ')[1])
const Numbers = input[1].split(' ').map(Number);

// console.log(Numbers);
// 가장 작은 수부터 나열 
// let replaceBigNumber = Numbers.sort(function(a,b){
//     return (Number(a)-Number(b))
// })

// //배열에서 M - (가장 작은 수 두 개의 합)보다 큰 수는모두 삭제한다
// let filterTooBig = replaceBigNumber.filter(function(data){
//     return Number(data) <= (maxNumber-(Number(replaceBigNumber[0])+Number(replaceBigNumber[1]))) 
// });

// console.log(filterTooBig.length);

// for(let a = 0; a < filterTooBig.length; a++){
//     // console.log(a);
//     for(let b = 0; b < filterTooBig.length; b++){
//         if(a !== b){
//             console.log([a,b]); 
//             for(let c =0; c<filterTooBig.length; c++){
//                 if(b === c || a === c){
//                 }else{
//                     plusResult.push(Number(filterTooBig[a])+Number(filterTooBig[b])+Number(filterTooBig[c]))
//                 }
//             }
//         }
//     }
// }
// 중복인 값 까지 포함이 되어 데이터가 nCm이 아니라 nPm으로 구해진다. 
//[ 0, 1 ]
// [ 0, 2 ]
// [ 0, 3 ]
// [ 1, 0 ]
// [ 1, 2 ]
// [ 1, 3 ]
// [ 2, 0 ]
// [ 2, 1 ]
// [ 2, 3 ]
// [ 3, 0 ]
// [ 3, 1 ]
// [ 3, 2 ]
// nCm의 경우를 자바스크립트로 하려면 재귀함수를 사용하는 것이 좋다고 한다.
//https://velog.io/@devjade/JavaScript로-순열과-조합-알고리즘-구현하기



// console.log(plusResult);

const mostBigNumber = function(arr){

const getCombination = function(arr, selectNumber){
    const result = []
    
    if (selectNumber === 1) return arr.map((el) => [el])
    
    arr.forEach((fixed, index, origin) => {
                //값, 인덱스, 배열
        const rest = origin.slice(index + 1); //index+1번째부터 
        const combination = getCombination(rest, selectNumber-1);//해당된 값을 제외하고 나머지 함수에서 selectNumber-1만큼 뽑기
        const attached = combination.map((el) => [fixed, ...el]);//해당된 값과 재귀함수의 결과값을 배열에 넣기
        result.push(...attached);
    });
    return result;
}

const arrResult = getCombination(Numbers, 3)
const plusResult = [];

for(let n of arrResult){
    let plus = n.reduce((sum, cur) => {return sum+cur},0);
    plusResult.push(plus)

}
let finalNumber = 1;
for(let i of plusResult){
    if(i <= maxNumber && i > finalNumber){
        finalNumber = i
    }
}
return finalNumber
}


console.log(mostBigNumber(Numbers));

//84056KB
//452ms 