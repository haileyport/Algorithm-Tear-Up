const height = require("fs").readFileSync(0, "utf-8").toString().split(" ");

const A = height[0];
const B = height[1];
const V = height[2];

console.log(Math.ceil((V - B) / (A - B)));
