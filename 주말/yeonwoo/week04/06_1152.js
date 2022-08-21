const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split(" ");

//const input = 'The Curious Case of Benjamin Button'.split(' '); console.log(input);

if (input[0] === "") console.log(0);
else console.log(input.length);
