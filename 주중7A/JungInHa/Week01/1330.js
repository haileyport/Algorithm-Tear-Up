const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);

if (A > B) {
    console.log('>')
} else if (A < B) {
    console.log('<')
} else if (A == B) {
    console.log('==')
}