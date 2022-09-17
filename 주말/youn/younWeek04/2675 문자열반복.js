const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const ca = Number(input[0]);

for (let i = 1; i <= ca; i++){
    let arr = input[i].split(" ");
    let num = arr[0];
    let num2  = arr[1].split("");
    let result ="";
    for(let j =0 ; j < num2.length; j++){
      result= result + (num2[j].repeat(num));
    }
    console.log(result)
}