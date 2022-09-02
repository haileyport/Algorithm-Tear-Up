const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim()//.split(" ");

let curRoomNum = 1;
let result = 1;
for (i = 1; input > curRoomNum; i++) {
    curRoomNum = curRoomNum + 6 * i;
    result = i+1;
}
console.log(result);


/* 
1
+6 = 6*1
7
+12 = 6*2
19
+18 = 6*3
37
+24 = 6*4
61 

1 + 6*1 + 6*2 + 6*3 + 6*4

*/
