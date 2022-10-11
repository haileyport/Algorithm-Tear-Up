let input = require("fs").readFileSync("05_11729.txt").toString();

let N = Number(input); // 원판의 갯수
let count = 0;
let answer = [];

// num : 원반의 개수
// from : 출발지 기둥 번호
// to : 목적지 기둥 번호
// other : 나머지 기둥 번호

function Hanoi(num, from, other, to) {
  if (num === 0) {
    return;
  } else {
    // 맨 아래를 제외한 원반들을 다른 기둥으로 옮기고 1 2
    Hanoi(num - 1, from, to, other);
    // 맨 아래 원반을 목적지 기둥으로 옮기고 1 3
    answer.push([from, to]);
    count++;
    // 다른 곳으로 옮겼던 원반들을 목적지 원반 위에 얹음 2 3
    Hanoi(num - 1, other, from, to);
  }
}
Hanoi(N, "1", "2", "3");
console.log(count);
console.log(answer.map((element) => element.join(" ")).join("\n"));
