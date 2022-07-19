//알람시계

const fs = require("fs");
const input = fs.readFileSync("./../text.txt").toString().split(" ");
const hour = parseInt(input[0]);
const min = parseInt(input[1]);

//45분 앞으로 돌리는 로직 작성
//현재 설정된 알람이 45분 미만인 경우 시간을 -1
//분을 60 + min - 45
//현재 설정된 알람이 45분과 같거나 이상인 경우 시간은 움직이지 않음

let ans = [];
if (min < 45) {
  if (hour === 0) {
    ans = [23, 60 + min - 45];
  } else {
    ans = [hour - 1, 60 + min - 45];
  }
} else {
  ans = [hour, min - 45];
}

console.log(ans[0] + " " + ans[1]);
