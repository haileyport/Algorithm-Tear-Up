/* 2941번 크로아티아 알파벳 */

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

function solution(input){
    
    let arr = ["c=", "c-", "dz=", "d-",  "lj", "nj", "s=", "z="];
    let plusLeng = 0;
    let minusLeng = 0;

    for(let i = 0; i < arr.length; i++){
        let str = input;
        if(str.includes(arr[i])){
            str = str.replaceAll(arr[i], "#")
            let count = 0;
            console.log(str);

            for(let j = 0; j < str.length; j++){
                if(str[j] === "#"){
                    count++; 
                }
            }

            plusLeng += count; 
            minusLeng += (arr[i].length) * count; 

            //str = str.split("#").join("");
        }
    }

    console.log(input.length + plusLeng - minusLeng);
}

solution(input);