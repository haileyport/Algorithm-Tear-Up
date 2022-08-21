// memory : 9540KB
// time : 140ms
// 풀이시간 : 8분


let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

// console.log(input)
// check.1 : input의 0번째는 테스트케이스 수
// check.2 : 각 테스트케이스는 공백을 기준으로 나와있음
// 출력 : Case #1: 1 + 1 = 2

// 1. for문으로 i는 1부터 input의 0번값만큼 순회하면서
    // 1-1. testcase라는 변수에 공백을 기준으로 각 테스트케이스 할당 (여러 자리수의 숫자가 들어와도 처리가 가능하도록)
    // 1-2. Templete String으로 Case #{i} = {testcase[0]} + {testcase[1]} = {testcase[0] + testcase[1]} 출력
    
    
for(let i = 1; i <= parseInt(input[0]); i++){
    let testCase = input[i].split(' ').map(el => +el);

    console.log(`Case #${i}: ${testCase[0]} + ${testCase[1]} = ${testCase[0] + testCase[1]}`);
}



