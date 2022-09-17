let input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (x) {
    input.push(x.trim());
  })
  .on("close", function () {
    const [N, ...order] = input.map(Number);
    const result = order.sort((a, b) => a - b);
    console.log(result.join("\n"));
  });
