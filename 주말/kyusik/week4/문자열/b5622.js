const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim()//.split("\n");

//console.log(input) -> 문자열로 들어옴
const alphabetObj = {
	2: "ABC",
	3: "DEF",
	4: "GHI",
	5: "JKL",
	6: "MNO",
	7: "PQRS",
	8: "TUV",
	9: "WXYZ",
}; // 각 알파벳에 해당하는 수를 key로 지정한 객체.

let result = 0; // 결과값 초기화

for (let i = 0; i < input.length; i++) {//인풋의 첫번째 글자부터 돌아라
	for (let j = 2; j <= 9; j++) {
		if (alphabetObj[j].includes(input[i])) {//객체의 key 2부터 9까지에 해당하는 value를 돌면서 인풋과 일치하면...
			result += j + 1; // 일치한 객체의 key + 1에 result를 더해 재할당
            break; // 안쪽 반복문 빠져나와 바깥 반복문으로.
		}
	}
}

console.log(result);