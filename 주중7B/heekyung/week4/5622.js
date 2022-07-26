const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('')
let count = 0
// for(i=0;i<input.length;i++){
// if(input[i] === 'A' || input[i] === 'B' || input[i] === 'C') {
//     count += 3;
//   } else if(input[i] ==='D' || input[i]==='E' || input[i]==='F'){
//     count += 4;
//   } else if(input[i] ==='G' || input[i]==='H' || input[i]==='I'){
//     count+= 5;
//   } else if(input[i] ==='J' || input[i]==='K' || input[i]==='L'){
//     count+= 6;
//   } else if(input[i] ==='M' || input[i]==='N' || input[i]==='O'){
//     count+= 7;
//   } else if(input[i] ==='P' || input[i]==='Q' || input[i]==='R' || input[i]==='S'){
//     count+= 8;
//   } else if(input[i] ==='T' || input[i]==='U' || input[i]==='V'){
//     count+= 9;
//   } else if(input[i] ==='W' || input[i]==='X' || input[i]==='Y' || input[i]==='Z'){
//     count += 10;
//   }
// }

// console.log(count)
// 노가다 풀이




const changeToNumber = (alphabet ) => {
	const number={
		'A' : 2,
		'B' : 2,
		'C' : 2,
		'D' : 3,
		'E' : 3,
		'F' : 3,
		'G' : 4,
		'H' : 4,
		'I' : 4,
		'J' : 5,
		'K' : 5,
		'L' : 5,
		'M' : 6,
		'N' : 6,
		'O' : 6,
		'P' : 7,
		'Q' : 7,
		'R' : 7,
		'S' : 7,
		'T' : 8,
		'U' : 8,
		'V' : 8,
		'W' : 9,
		'X' : 9,
		'Y' : 9,
		'Z' : 9,
	}
	return number[alphabet];
}
input.forEach(alphabet => count += changeToNumber(alphabet)+1)


console.log(count)

// 객체 함수를 이용한 풀이