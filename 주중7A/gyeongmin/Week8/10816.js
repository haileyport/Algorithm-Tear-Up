const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input.shift());
const HaveCard = input.shift().split(" ");
const M = Number(input.shift());
const MatchCard = input.shift().split(" ");
var answer = [];
var HaveCardMap = new Map();
for (number of HaveCard) {
  if (HaveCardMap.has(number))
    HaveCardMap.set(number, HaveCardMap.get(number) + 1);
  else HaveCardMap.set(number, 1);
}

for (number of MatchCard) {
  if (HaveCardMap.has(number)) answer.push(HaveCardMap.get(number));
  else answer.push(0);
}

console.log(answer.join(" "));
