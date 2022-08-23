const fs = require('fs');
const [N, ...input] = fs.readFileSync('./input.txt').toString().trim().split("\n");
// const [N, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let sizes = input.map(el => el.split(' ').map(n => Number(n)));

let result = []

for (let i = 0; i < N; i++) {
    let rank = 1;
    for (let j = 0; j < N; j++) {
      if (i !== j) {
        if (sizes[i][0] < sizes[j][0] && sizes[i][1] < sizes[j][1]) {
          rank++;
        } 
      }
    }
    result.push(rank)
}

console.log(result.join(' '))