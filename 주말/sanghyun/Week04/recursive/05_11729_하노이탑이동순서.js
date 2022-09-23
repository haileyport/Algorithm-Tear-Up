// https://nyang-in.tistory.com/210

let fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString();

let N = Number(input); // 원판의 갯수
let count = 0;
let answer = [];

// num : 원반의 개수
// from : 출발지 기둥 번호
// to : 목적지 기둥 번호
// other : 나머지 기둥 번호

function Hanoi(num, from, other, to){
    if(num === 0) {
        return;
    }else{
        // 받아온 원반 갯수보다 하나 적은 원반들을 목적지가 아닌 곳으로 재귀적으로 이동
        Hanoi(num - 1 , from, to, other);
        // 맨 아래 원반을 목적지로 이동시킴
        answer.push([from, to]);
        count++;
        //다른 곳으로 옮겼던 원반들을 그 위에 얹음
        Hanoi(num - 1, other, from, to);
    }
}
Hanoi(N, '1','2','3');
console.log(count);
console.log(answer.map((element) => element.join(" ")).join("\n"));