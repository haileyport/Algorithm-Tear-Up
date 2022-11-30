process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  for (let i = 0; i < b; i++) {
    let stars = "";

    for (let j = 0; j < a; j++) {
      // stars = stars + "*"
      stars += "*";
    }

    console.log(stars);

  }
});