// 문자열  11654  아스키 코드
// 난이도 : 브론즈5  
// 풀이시간 : 10분
// 메모리 : 9340 KB      
// 시간 :  144 ms      
// 코드길이 : 137 B

// 아스키코드를 반환하는 함수 String.charCodeAt()를 활용하여 풀기
// 

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
// 입력값 받아오기

console.log(input.fromCharCode());

// 10분이나 걸릴 문제가 아니였는데 fromCharCode를 쓰는 방법을 까먹어서 그거 찾다가 10분까먹었다는 슬픈 이야기가 담겨있습니다.