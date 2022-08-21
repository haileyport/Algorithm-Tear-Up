let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = 0;

for (let i = 1; i <= input[0]; i++) {
	let obj = {};
	let torf = true;
	for (let j = 0; j < input[i].length; j++) {
		if (!obj[input[i][j]]) {
			obj[input[i][j]] = 1;
		} else {
			if (input[i][j] === input[i][j - 1]) obj[input[i][j]]++;
			else {
				torf = false;
				break;
			}
		}
	}
	if (torf) result++;
}

console.log(result);
