let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

const testCase = input.shift();

const max = Math.max(...input)

const arr = new Array(max+1);
arr.fill(0)
for( i =0; i<input.length; i++){
    arr[input[i]]++
}
for( i = 0; i<arr.length;i++){
    if( arr[i]){
        for(j=0; j<arr[i]; j++){
            console.log(i)
        }
    }
}