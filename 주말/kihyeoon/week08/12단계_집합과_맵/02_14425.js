const [firstLine, ...input] = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : __filename.split("/").pop().slice(0, -3) + ".txt"
  )
  .toString()
  .trim()
  .split("\n");

const [n, m] = firstLine.split(" ").map(Number);

const list = input.slice(0, n);
const inspect = input.slice(n);

const obj = {};
let result = 0;

list.forEach((el) => (obj[el] = true));
inspect.forEach((el) => {
  if (obj[el]) result++;
});

console.log(result);

// for (let i = 0; i < inspect.length; i++) {
//   if (list.includes(inspect[i])) {
//     result++;
//   }
// }
