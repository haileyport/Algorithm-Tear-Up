/* 2525번 오븐시계 */

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let startHour = Number(input[0].split(" ")[0]);
let startMinute = Number(input[0].split(" ")[1]);
let cookTime = Number(input[1]);

let endHour = parseInt((startHour * 60 + startMinute + cookTime) / 60);
let endMinute = parseInt((startHour * 60 + startMinute + cookTime) % 60);

endHour = endHour > 23 ? endHour - 24 : endHour;

console.log(`${endHour} ${endMinute}`);