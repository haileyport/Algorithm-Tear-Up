const input = Number(
  require("fs").readFileSync("../input.txt").toString().trim()
);

function d(n) {
  return (
    String(n)
      .split("")
      .map(Number)
      .reduce((acc, cur) => acc + cur) + n
  );
}

let decomps = [];
for (let i = 0; i < input; i++) {
  if (d(i) === input) {
    decomps.push(i);
  }
}

if (decomps.length === 0) {
  console.log(0);
} else {
  console.log(Math.min(...decomps));
}
