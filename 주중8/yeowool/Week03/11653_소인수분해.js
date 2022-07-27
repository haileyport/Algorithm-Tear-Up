// 기본수학2  11653_소인수분해
// 난이도 : 브론즈1
// 풀이시간 : 30분
// 메모리 :	9876  KB      
// 시간 :  2336 ms      
// 코드길이 : 251 B


// 1 ~ N 의 숫자를 for문으로 순회를 하여 나눈 후 나머지가 0이 되는 값을 리턴하기!!

// 1. 2부터 순회하면서 num을 나누어 값을 구한다.
// 2. for문 안에서 i로 num을 나누어서 떨어지는 i로 다시 i로 나눈다.

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();

let result = [];
for(let i = 2; i <= input; i++) {
    if(input % i === 0) {
        result.push[i];
    }
}
console.log(result+"\n");


/// 틀림
// 그냥 나누어 떨어지는 숫자만 push 해주면 된다고 생각했는데 그게 아니였음!!
// 현재값으로 나누어 떨어질때까지 나누어야함
// while을 통해 떨어질때까지 나누기로 변경

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();

let result = [];
for(let i = 2; i <= input; i++) {
    while (input % i === 0) {
        input = input / i;
        result.push(i);
    }
}
console.log(result+"\n");


/// 틀림 ????
// 소인수분해를 잘못 이해했나..?
// 출력형식때문에 틀렸음

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();

let result = [];
for(let i = 2; i <= input; i++) {
    while (input % i === 0) {
        input = input / i;
        result.push(i);
    }
}
console.log(result.join("\n"));

