const [n, m] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "04_1929.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const isNotPrime = { 1: true };

for (let i = 2; i <= Math.ceil(Math.sqrt(m)); i++) {
  if (isNotPrime[i]) {
    continue;
  }

  for (let j = i ** 2; j <= m; j += i) {
    isNotPrime[j] = true;
  }
}

for (let i = n; i <= m; i++) {
  if (!isNotPrime[i]) {
    console.log(i);
  }
}
