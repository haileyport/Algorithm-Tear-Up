// 반복문   11022_A+B-8 성공
// 난이도 : 브론즈5
// 풀이시간 :  1시간
// 메모리 :  9544 KB      
// 시간 :   152 ms      
// 코드길이 : 265  B

// 1. 0번째 index를 slice로 제외시킨다.
// 2. for문으로 배열 하나씩 순회하며 공백기준 split한다. 
//     => 그냥 input[0]까지 돌고for문을 1번부터 돌면 되기 때문에 기각
// 3. for문 안에 newArr라는 배열을 선언하여 input배열을 하나씩split하여 push한다.
// 4. newArr[i][0]를 firstNum에 담고 newArr[i][1]을 secondNum에 담는다
// 5. console.log에 템플릿 리터럴로 값을 넣는데 (split으로 문자열이 된 변수를 Number로 감싸줌) 뒤에 "\n"을 더해준다.
 
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// let input = ["5", "1 1", "2 3", "3 4", "9 8", '5 2']
// let result = "";
// let newArr = [];
// for(let i = 1; i <= input[0]; i++) {
//     newArr.push(input[i].split(" "));
// }
// for(let i = 0; i <= input[0]; i++) {
//     let [firstNum, secondNum] = [Number(newArr[i][0]),Number(newArr[i][1])]
//     result += `Case #${i}: ${firstNum} + ${secondNum} = ${firstNum + secondNum}`
// }
// console.log(result)

// newArr에 넣을 필요가 없다

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (i = 1; i <= input[0]; i++) {
    let [firstNum, secondNum] = input[i].split(" ").map(Number);
    console.log(`Case #${i}: ${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
}

// 끝에 \n더하면 출력형식오류