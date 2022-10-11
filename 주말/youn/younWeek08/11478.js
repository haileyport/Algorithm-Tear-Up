const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);

const s = input[0];
let str = new Set();

for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
        str.add(s.slice(i, j + 1))
    }
}


console.log(str.size);

