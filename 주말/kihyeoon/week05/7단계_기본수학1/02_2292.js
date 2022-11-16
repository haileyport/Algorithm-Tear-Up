const input = require("fs").readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "02_2292.txt"
);

let range = 1,
  block = 1;

while (block < input) {
  block += 6 * range;

  range++;
}

console.log(range);
