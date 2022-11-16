const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = input.shift();
const kgCmTable = input.map(kgCm => kgCm.split(' ').map(num => parseInt(num)));
const rank = [];
 
for (let i = 0; i < T; i++) {
    let counter = 0;
    for (let j = 0; j < T; j++) {
        if (i !== j) {
            if (kgCmTable[i][0] < kgCmTable[j][0] && kgCmTable[i][1] < kgCmTable[j][1]) {
            counter++;
            }
        }
    }
    rank.push(counter + 1);
}
 
console.log(rank.join(' '));