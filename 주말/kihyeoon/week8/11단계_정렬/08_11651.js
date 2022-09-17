const [N, ...input] = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : __filename.split("/").pop().slice(0, -3) + ".txt"
  )
  .toString()
  .trim()
  .split("\n");

let coordsArr = input.map((el) => el.split(" ").map(Number));

let results = "";

coordsArr
  .sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  })
  .forEach((coords) => (results += `${coords[0]} ${coords[1]}\n`));

console.log(results);
