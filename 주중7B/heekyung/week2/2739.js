let input = require('fs').readFileSync('/dev/stdin').toString();

const arr = Array(9).fill().map((arr, i) => i+1);

const data = arr.map(function(i) {
	const twoTimesTable = Number(input[0]);
	return console.log(`${twoTimesTable} * ${i} = ${twoTimesTable*(i)}`)
})