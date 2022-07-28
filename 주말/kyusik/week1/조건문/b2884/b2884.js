/*
첫째 줄에 두 정수 H와 M이 주어진다. (0 ≤ H ≤ 23, 0 ≤ M ≤ 59) 그리고 이것은 현재 상근이가 설정한 놓은 알람 시간 H시 M분을 의미한다.
입력 시간은 24시간 표현을 사용한다. 24시간 표현에서 하루의 시작은 0:0(자정)이고, 끝은 23:59(다음날 자정 1분 전)이다. 시간을 나타낼 때, 불필요한 0은 사용하지 않는다.
일어나려는 시간보다 45분 빠른 시간이 출력되면 된다.
1. m 이 45보다 같거나 크다면 그냥 -45 하면됨
2. m 이 45보다 작다면..
m이 44일때 -1이 남으므로 60 -1 = 59
m이 35일때 -10이 남으므로 60 -10 = 50
결국 60 + m - 45가 되고
h 에서 -1 을 하면됨
3. 이때 h 가 음수라면 24 + h 하면됨
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
let h = input[0];
let m = input[1];
if (m >= 45) {
    m = m - 45;
    console.log(h, m);
} else if (m < 45 && h - 1 >= 0) {
    h = h - 1;
    m = 60 + (m - 45);
    console.log(h, m);
} else {
    h = 24 + (h - 1);
    m = 60 + (m - 45);
    console.log(h, m);
}