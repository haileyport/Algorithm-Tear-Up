//아스키 코드

//런타임 에러로 인한 fs모듈 사용 불가

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  console.log(line.codePointAt(0));

  rl.close();
}).on("close", function () {
  process.exit();
});
