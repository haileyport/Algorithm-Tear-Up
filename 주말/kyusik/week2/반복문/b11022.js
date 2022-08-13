const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
//console.log(input)
// 입력을 받아온 결과 : [ '5', '1 1', '2 3', '3 4', '9 8', '5 2' ]

let t = input[0];
// 위 입력의 0번째 인덱스는 테스트 케이스의 갯수 t
let result = '';

for (let i = 1; i <= t; i++) {

    let number = input[i].split(' ');
    //console.log(number);
    //입력의 1부터 t까지의 각 인덱스를 ' '기준으로 다시 나눠서 배열로 만듬

    result += `Case #${i}: ${number[0]} + ${number[1]} = ${parseInt(number[0]) + parseInt(number[1])}\n`;
    /*
    아래와 같이 for문이 돌때마다 하나씩 결과를 출력하게하면 시간초과가 날 것 같아서 위에 변수 result 를 선언하고 빈 배열을 할당한 뒤
    그 배열에 계속 출력할 문자열을 개행문자로 나눠가며 쌓았다. 그 뒤 for문 밖에서 result를 출력했다.
     */
    
    
}
console.log(result);