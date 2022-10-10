let input = Number(require("fs").readFileSync("1_2739.txt"));

for (let i = 1; i <= 9; i++) {
  console.log(`${input} * ${i} = ${input * i}`);
}
