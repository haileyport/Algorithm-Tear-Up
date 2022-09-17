//큐

const fs = require("fs");
const input = fs
  .readFileSync("text.txt")
  .toString()
  .split("\n")
  .map((el) => el.trim());
const info = Number(input.shift());

//명령
//push X : X넣기
//pop : shift연산, 출력하되 큐가 빈 경우 -1 출력
//size : length
//empty : 비어있는지 확인 1, 0
//front : 맨앞 정수 출력, 비어있으면 -1
//back : 맨앞 정수 출력, 비어있으면 -1

const regex = new RegExp("push", "g");

const que = [];

let ans = "";

for (i = 0; i < info; i++) {
  let el = input[i];
  el = el.replace(regex, "k");
  if (el[0] === "k") {
    el = el.split(" ");
    que.push(el[1]);
  } else if (el === "pop") {
    ans += (que.length === 0 ? "-1" : que.shift()) + "\n";
  } else if (el === "size") {
    ans += que.length + "\n";
  } else if (el === "empty") {
    ans += (que.length === 0 ? 1 : 0) + "\n";
  } else if (el === "front") {
    ans += (que.length === 0 ? "-1" : que[0]) + "\n";
  } else if (el === "back") {
    ans += (que.length === 0 ? "-1" : que[que.length - 1]) + "\n";
  }
}

console.log(ans);
