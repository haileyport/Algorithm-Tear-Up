const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let testCase = input.shift();
let avgNum = input[0].split(' ').map(Number);

let maxNum = avgNum[0];
for(i = 1; i < avgNum.length ; i++){
	if(maxNum < avgNum[i]){
		maxNum = avgNum[i];
	}
}
let resetNum = [];
for(i = 0; i< avgNum.length ; i++){
	resetNum.push(avgNum[i]/maxNum*100);
}

let sum = resetNum.reduce((acc , cur) => acc+cur);
let avg = sum / avgNum.length;
console.log(avg);
