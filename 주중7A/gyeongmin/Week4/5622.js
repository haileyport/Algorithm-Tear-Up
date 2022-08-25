let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
//let input = require('fs').readFileSync('예제.txt').toString().trim().split('\n');
//console.log(input[0]) //['WA']
let result = 0;
for(let i = 0; i < input[0].length; i++){
    if(input[0][i] === 'A' || input[0][i] === 'B' || input[0][i] === 'C'){
        result += 3;
    }else if(input[0][i] === 'D' || input[0][i] === 'E' || input[0][i] === 'F'){
        result += 4;
    }else if(input[0][i] === 'G' || input[0][i] === 'H' || input[0][i] === 'I'){
        result += 5;
    }else if(input[0][i] === 'J' || input[0][i] === 'K' || input[0][i] === 'L'){
        result += 6;
    }else if(input[0][i] === 'M' || input[0][i] === 'N' || input[0][i] === 'O'){
        result += 7;
    }else if(input[0][i] === 'P' || input[0][i] === 'Q' || input[0][i] === 'R' || input[0][i] === 'S'){
        result += 8;
    }else if(input[0][i] === 'T' || input[0][i] === 'U' || input[0][i] === 'V'){
        result += 9;
    }else if(input[0][i] === 'W' || input[0][i] === 'X' || input[0][i] === 'Y' || input[0][i] === 'Z'){
        result += 10;
    }        
}
console.log(result)
