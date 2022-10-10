const input = require("fs").readFileSync("03_10809.txt").toString().trim();

const result = [];

// 'a'는  97번이고, 'z'는 122번

for (i = 97; i <= 122; i++) {
  result.push(input.indexOf(String.fromCharCode(i)));
}

console.log(result.join(" "));
