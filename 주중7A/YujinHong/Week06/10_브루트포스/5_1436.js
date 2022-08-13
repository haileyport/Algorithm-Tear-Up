let input = Number(
  require("fs").readFileSync("../input.txt").toString().trim()
);

let theNumberAtTheEnd = 665;

while (input > 0) {
  theNumberAtTheEnd++;

  if (String(theNumberAtTheEnd).includes("666")) {
    input--;
  }
}

console.log(theNumberAtTheEnd);

// 참고 - https://dpsc615.tistory.com/130
