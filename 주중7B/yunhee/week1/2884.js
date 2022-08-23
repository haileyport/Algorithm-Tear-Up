/* 2884번 알람시계 */

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let hour = Number(input[0]);
let minute = Number(input[1]);

minute -= 45;

if(minute < 0){
    minute += 60;
    --hour;
    
    hour = hour < 0 ? 23 : hour;
}

console.log(`${hour} ${minute}`);