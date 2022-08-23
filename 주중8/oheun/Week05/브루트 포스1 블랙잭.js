/*
통과 여부 : 통과!!!!
시간 복잡도 : 180 ms
공간 복잡도 : 9684 KB

[문제]
문제 : 2798번 블랙잭 / 브론즈2

입력 : 첫째 줄에 N(3<= N <= 100), M(10<=M<=300,000)
- 둘째 줄에 카드에 있는 수
출력 : 합이 M을 넘지 않는 M에 최대한 가까운 카드 3장의 합 출력

[개념]
- 브루트 포스 : 모두 탐색하면서 요구 조건에 충족되는 결과 가져오기 

[유사 코드]
1. 입력 받기
    - numberCard : 카드의 개수 N
    - total : 합이 넘지 말아야 하는 카드 3장의 합
    - number : 배열, 배열에 두번째 줄 카드 수 할당
2. 반복문
    2.1. result에 number[0] 할당하기
    2.2. 1부터 numberCard-1까지 반복하기
    2.3. 2부터 numberCard-2까지 반복하기
    2.4. result에 더한 값 push하기
3. 배열 정렬하기
4. 배열에서 total값보다 작은 값 뽑아서 첫번째 인덱스 출력하기

[아이디어]
1. 모든 3장의 합을 더해야 할까?
2. 합으로 배열을 만든 다음에 그 중에서 total보다 작은 max인 것만 뽑으면 되지 않을까?
3. 아니면 배열이 아니더라도 total보다 작고 가장 큰 숫자 하나만 변수에 설정해도 되지 않을까?
4. 반복문을 3중으로 만들어볼까..?
    4.1. 3중으로 만들면서 자기 자신이 아닌 것을 뽑아야 함. => 너무 복잡해질 것 같아!!
    4.2. 는 첫 번째 숫자도 계속 움직여야 하네

[틀린 이유]
1. 답이 맞는데 왜 틀려....?
*/

// -------------------------왜 틀리는지 몰라서 바꿔보기--------------------------------------
// //1. 입력 받기
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// //let input = fs.readFileSync(filePath).toString().trim().split('\n');
// let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

// let numberCard = input[0].split(' ')[0];
// let total = input[0].split(' ')[1];
// let number = input[1].split(' ').map(num =>Number(num));   // map 이용해서 Number로 바꾸기

// //console.log(`잘 나오고 있나요? 네!! ${numberCard} ${total} ${number}`);

// // 2. 반복문
// let result = [];               // push 해주기 위해서
// // console.log(typeof result, result );
// for (let i = 0; i < numberCard; i++) {
//     // console.log('i는 잘 나오고 있어요? 네~~', i);
//     for (let j = i+1; j < numberCard; j++) {
//         // console.log('j도 잘 나오고 있어요? 네~~', j);
//         for (let k = i+2; k < numberCard; k++) {
//             // console.log('k도 잘 나오고 있어요? 네~~', k);
//             result.push(number[i] + number[j]+ number[k]);
//         }
//     }

// }

// // console.log(numberLength, result);

// // 3. 배열 정렬하기
// result.sort((a, b) => {return b-a;});
// // console.log(result);
// let solution = result.filter((number) => {if(number <= total) return true;});
// // console.log(solution);
// console.log(solution[0]);


//1. 입력 받기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
//let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

let numberCard = input[0].split(' ')[0];
let total = input[0].split(' ')[1];
let number = input[1].split(' ').map(num =>Number(num));   // map 이용해서 Number로 바꾸기

//console.log(`잘 나오고 있나요? 네!! ${numberCard} ${total} ${number}`);

// 2. 반복문
let temp = 0;
let result = 0;               
// console.log(typeof result, result );
// 중복 제거를 해야 함.
for (let i = 0; i < numberCard-2; i++) {
    // console.log('i는 잘 나오고 있어요? 네~~', i);
    for (let j = i+1; j < numberCard-1; j++) {
        // console.log('j도 잘 나오고 있어요? 네~~', j);
        for (let k = j+1; k < numberCard; k++) {
            // console.log('k도 잘 나오고 있어요? 네~~', k);
            temp = number[i] + number[j]+ number[k];
            if (temp > result && temp <= total) {
                result = temp;
              }
        }
    }

   
}
console.log(result);