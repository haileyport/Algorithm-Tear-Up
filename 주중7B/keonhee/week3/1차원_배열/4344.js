const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [input1, ...input2] = input;

input1 = +input[0];

let students = [];
let arrays = [];

input2.map((item) => {
  item = item.split(' ');

  students.push(item[0]);
  arrays.push(item.slice(1));
});

function solution(input, students, arrays) {
  const result = [];

  let averageArr = new Array(input).fill(0);

  // 평균 을 넘는 학생의 수
  let numberOverAverage = new Array(input).fill(0);

  arrays.map((array, i) => {
    array = array.map(Number);
    // 평균 구해서 averageArr 에 할당시켜준다.
    averageArr[i] = Math.floor(array.reduce((a, b) => a + b) / students[i]);
  });

  // 평균보다 넘는 학생수 찾기
  arrays.map((array, i) => {
    array.map((num) => {
      // 각 배열에 접근 해서 각 배열 인덱스의 average 보다 넢은 숫자가 있을경우 +=1
      if (num > averageArr[i]) {
        numberOverAverage[i]++;
      }
    });
  });

  // 평균 넘는 학생 비율 구하기

  students.map((student, i) => {
    // 백분율 구해서 result 에 push
    result.push(((numberOverAverage[i] / student) * 100).toFixed(3) + '%');
  });

  result.forEach((num) => console.log(num));
}
solution(input1, students, arrays);
