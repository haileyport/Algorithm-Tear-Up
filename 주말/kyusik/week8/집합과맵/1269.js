const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const A = input[1].split(' ');
const B = input[2].split(' ');
const Asub = A.slice();

const Aset = new Set(A);
const Bset = new Set(B);
const AsubSet = new Set(Asub);

Aset.forEach((el) => {
    if(Bset.has(el)) Aset.delete(el);
})

Bset.forEach((el) => {
    if(AsubSet.has(el)) Bset.delete(el);
})

const sum = Aset.size + Bset.size;
console.log(sum);
