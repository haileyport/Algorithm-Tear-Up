/* 14681번 사분면 고르기 */

let readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function(line){
   input.push(line); 
}).on("close", function(){
    let x = input[0];
    let y = input[1];
    
    if(x > 0){
        if(y > 0){
            console.log(1);
        }else{
            console.log(4);
        }
    }else{
        if(y > 0){
            console.log(2);
        }else{
            console.log(3);
        }
    }
    
    process.exit();
});