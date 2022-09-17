const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

//const input = '2100000000 9 10'.split(' ').map(Number); console.log(input);

const fixedCost = input[0];
const variableCost = input[1];
const sellingCost = input[2];

let count = 0;

const profit = sellingCost - variableCost;

if (profit <= 0) console.log(-1);
else {
  count = Math.floor(fixedCost / profit) + 1;

  console.log(count);
}

/*
// const input = '2100000000 9 10'.split(' ').map(Number); console.log(input);

const fixedCost = input[0];
const variableCost = input[1];
const sellingCost = input[2];

if (variableCost >= sellingCost) console.log(-1);
else {
  let i = 1;
  let allCosts = fixedCost;
  let salesRevenue = 0; 
  for(i; allCosts > salesRevenue; i++) {
  	allCosts += variableCost;
  	salesRevenue += sellingCost;  
  }
*/
