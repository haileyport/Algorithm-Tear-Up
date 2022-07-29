const fs = require('fs');
const input = fs.readFileSync("./input.txt").toString().trim().split(" ");

let h = Number(input[0]);
let m = Number(input[1]);

if (m >= 45) {
    m = m - 45;
} else if (m < 45) {
    let leftover = Math.abs(m - 45);
    m = 60 - leftover
    h = h - 1;
    
    if (h === -1) {
        h = 23;
    }
} 


console.log(h, m);