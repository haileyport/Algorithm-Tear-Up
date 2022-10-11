process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  console.log(("*".repeat(a) + `\n`).repeat(b));

  //     let result = "";
  //     for (let i = 0; i < a; i++) {
  //         result += "*";
  //     }
  //     for (let i = 0; i < b; i++) {
  //         result += result + "\n";
  //     }
  //     console.log(result);
});
