function solution(n) {
  let reversedNumber = n.toString(3).split("").reverse().join("");
  return parseInt(reversedNumber, 3);
}

console.log(solution(45));
