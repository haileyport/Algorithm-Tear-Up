const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const N = Number(input[0]);
input.shift();

let users = input.map(line => line.split(" "));
// 나이가 같으면 먼저 가입한 순으로 -> 입력순대로
// 나이가 증가하는 순으로 
users.sort((a, b) => {
  return Number(a[0]) - Number(b[0])
})

users.map(user => console.log(user.join(' ')))