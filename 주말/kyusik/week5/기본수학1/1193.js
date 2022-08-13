const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = parseInt(fs.readFileSync(filePath).toString().trim());

let roomSum = 0;
let floor = 1;
for(let i = 0; input > roomSum; i++) {
    roomSum = roomSum + i;
    floor = i;
}
//console.log(roomSum, floor, prev);
let m = roomSum - input;
if(floor % 2 === 0) {
    console.log(`${(floor - m)}/${(1 + m)}`);
} else {
    console.log(`${(1 + m)}/${(floor - m)}`);
}

/* 
1/1
1/2 2/1 
3/1 2/2 1/3 
1/4 2/3 3/2 4/1
5/1 4/2 3/3 2/4 1/5
홀수층 : n층 뒤에서 m번째 분수 = 1+m / n-m
짝수층 : n층 뒤에서 m번째 분수 = n-m / 1+m
1+ 1+1 + 2+1 + 3+1 + 4+1
*/