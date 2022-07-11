const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');


// var clacss = Number(input[0]);
let 
for(let i=1; i<= Number(input[0]); i++){
    let sum = 0;
    let count = 0;
    
    scores = input[i].split(' ').map(Number);
    const n = scores[0];
    
    for(let j=1; j<=n; j++){
        sum += scores[j];
    }
    const avg = sum/n;
    for(let k=1; k<=n; k++){
       if(scores[k]>avg){
           count++;
       }
   }
}
    console.log(((count/n)*100).toFixed(3)+"%");