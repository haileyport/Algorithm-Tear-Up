//오븐 시계

const fs = require("fs");
const inputraw = fs.readFileSync("./../text.txt").toString().split("\n");
const input = inputraw[0].split(" ").map(Number);
const hour = input[0];
const min = input[1];
const finish = Number(inputraw[1]);

//분으로 변환해서 나누기
const endHour = parseInt((hour * 60 + min + finish) / 60);
const endMin = parseInt((hour * 60 + min + finish) % 60);

console.log(endHour >= 24 ? endHour - 24 : endHour, endMin);
