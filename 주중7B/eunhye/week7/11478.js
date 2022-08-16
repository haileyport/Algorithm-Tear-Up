//서로 다른 부분 문자열의 개수

const fs = require("fs");
const input = fs.readFileSync("text.txt").toString().trim();
//문자열 S의 서로 다른 부분
//ababc의 부분 문자열은 문자열 길이 수 1부터 length까지 자른 것
//부분 문자열은 1부터 len까지 set
//set 은 중복이 안되니까 서로 다른 부분까지 체크 됨

const list = new Set();

for (i = 0; i <= input.length; i++) {
  for (j = 1; j <= input.length; j++) {
    input.slice(i, j) ? list.add(input.slice(i, j)) : list;
  }
}

const parts = [...new Set(list)];
console.log(parts.length);
