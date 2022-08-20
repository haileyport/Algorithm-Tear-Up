const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let num1 = input[0].split(" ")

let numcard = num1[0]
let numsum = num1[1]
let exnum = input[1].split(" ").map((e)=>Number(e))
let result = 0

    
for(let i = 0; i<numcard; i++){
    for(let j = i+1; j < numcard; j ++){
        for(let k = j+1; k <numcard; k++){
            let sum = exnum[i]+exnum[j]+exnum[k]
            const gab = numsum - sum
            if(gab>=0 && result <= sum){
                result = sum
            }
        }
    }
}
    console.log(result)