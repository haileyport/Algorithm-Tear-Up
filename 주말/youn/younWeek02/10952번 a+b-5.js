const fs = require('fs')
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
      
//console.log(input); // [ '1 1\r', '2 3\r', '3 4\r', '9 8\r', '5 2\r', '0 0' ]

for(let i = 0 ; i < input.length-1 ; i++){ //5일때 4까지 까지임

    const arr = input[i].split(' ');//
  
    const a = Number(arr[0]);
    const b = Number(arr[1]);
    
   console.log(a+b);//
}