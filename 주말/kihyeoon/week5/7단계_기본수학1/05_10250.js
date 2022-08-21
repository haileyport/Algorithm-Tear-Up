let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "05_10250.txt")
  .toString()
  .trim()
  .split("\n");

function Checkin(Height, Number) {
  const H = parseInt(Height);
  let N = parseInt(Number);
  let W = 0;
  while (N > 0) {
    N -= H;
    W++;
  }
  N += H;
  console.log(N + "" + (W < 10 ? "0" + W : W));
}

for (i = 1; i <= input[0]; i++) {
  const Case = input[i].split(" ").map((ele) => parseInt(ele));
  Checkin(Case[0], Case[2]);
}
