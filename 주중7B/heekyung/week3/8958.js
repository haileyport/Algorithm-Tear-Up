
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');


let sum = 0
let currentcount=0
let sumarr = []
let testCase = input.shift();

for(i = 0 ; i <input.length; i++){
    for(j=0; j<input[i].length;j++){
        if(input[i][j] === 'O'){
            currentcount++
              sum += currentcount
        }else {
            currentcount = 0;
            sum = 0;
        }
        
        if (input[i][j+1] === 'X' ||  input[i][j+1] === undefined){
        	 sumarr.push(sum)
        }
    }

    let numsumarr = sumarr.map(Number)
    let sumfilter = numsumarr.filter((element) => element !== 0);
    let result = sumfilter.reduce((acc , cur) =>acc+cur);
   
    sumarr = []
    currentcount = 0;
    sum = 0
     console.log(result)
}

//  거의 두배는 줄인 사람들의 답
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


// let sum = 0
// let currentcount=0

// let testCase = input.shift();

// for(i = 0 ; i <input.length; i++){
// 	currentcount = 0;
//     sum = 0
//     for(j=0; j<input[i].length;j++){
//         if(input[i][j] === 'O'){
//             currentcount++
             
//         }else {
//             currentcount = 0;
//         }
//          sum += currentcount
//     }

//         console.log(sum)
    
// }
