// 문자열  10809_알파벳찾기 성공
// 난이도 : 브론즈5
// 풀이시간 : 30분
// 메모리 : 9344 KB      
// 시간 :  176 ms      
// 코드길이 : 386 B

/*
1. 정답을 담을 배열 result를 선언한다
2. input을 쪼개어 배열로 만든다
3. input과 비교할 알파벳 배열을 소문자로 a부터 끝까지 만든다.
4. for문으로 알파벳 배열만큼 순회한다.
5. for문 안에서 알파벳배열[]와 일치하는지 확인하여 input의 index번호를 findIndex를 통해 찾는다.
   찾은 값을 result에 push한다
6. 배열이 아닌 공백기준으로 나열된 문자열이므로 공백과 함께 join한다.
*/ 


const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("");


let result = [];
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for(let i = 0; i < alphabet.length; i++) {
    result.push(input.findIndex( el => el === alphabet[i]))
}

console.log(result.join(" "))



