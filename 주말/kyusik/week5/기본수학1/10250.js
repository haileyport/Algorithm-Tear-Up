const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

//console.log(input);
const T = parseInt(input[0]);
for(let i = 1; i <= T; i++) {
    let caseData = input[i].split(' ');
    //console.log(caseData);
    let H = parseInt(caseData[0]);
    let W = parseInt(caseData[1]);
    let N = parseInt(caseData[2]);
    let roomCnt = 1; // 엘리베이터에서 몇번째로 떨어져있는지.

    while (N > H) {
        roomCnt++;
        N = N - H;
      } // N번째 손님이 층수보다 클 경우 roomCnt를 ++ 해주고 N 에서 H를 빼준다.
      if (roomCnt < 10) {
        console.log(`${N}0${roomCnt}`);
      } else {
        console.log(`${N}${roomCnt}`);
      }
    }
    