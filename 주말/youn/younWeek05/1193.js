let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let number = Number(input); //4
let line = 1;
while (true) {
	number -= line; // 4- 1 =3 // 3-2 =1 //1-3= -2
	if (number <= 0) {
		number += line; //-2+3=1
		break;
	}
	line++;
}

if (line % 2 === 1) {
	console.log(`${line - (number - 1)}/${1 + (number - 1)}`);// 3-(1-1)/1
} else {
	console.log(`${1 + (number - 1)}/${line - (number - 1)}`);
}