let fs = require('fs');
const { format } = require('path');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('test.txt').toString( );

// 첫째 줄에는 테스트 케이스의 개수 C
// 둘째 줄에는 각 케이스마다 학생의 수(정수)인 N이 첫 수로 주어지고,
// N명의 점수(0~100)가 주어진다 
// 각 케이스마다 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력


// split이용하여 개행을 기준으로 입력값을 배열로 구분해준다
input = input.split('\n');
// console.log(input);

let arr;
let sum;
let average;
let count;

// 케이스 개수를 의미하는 input[0]제외하기위해 1부터 반복! 
// 반복을 통해 문자열로 나열된 케이스들을 다시 split을 이용해 배열로 담아준다
for(let i = 1; i < Number(input[0])+1; i++){
  //  각 케이스 마다 sum, count 0으로 초기화
  sum = 0;
  count = 0;
  arr = input[i].split(' ');
  // console.log(arr);

  // 각 케이스들을 길이만큼 반복, 학생 수를 의미하는 arr[0]을 제외하기 위해 1부터 반복
  // 배열의 각 케이스를 돌때마다 학생들의 점수를 더하여 sum이라는 변수에 할당해준다 
  for(let j = 1; j < arr.length; j++){
    sum = sum + Number(arr[j]);
    // console.log(sum);
  }

  // 각 케이스마다 평균을 구해준다 (위 반복문을 통해 구한 sum(점수들의 합) 이용)
  // 평균을 변수 average에 할당해준다. 
  average = sum / Number(arr[0]);
  // console.log(average);

  // 평균점수보다 높은 점수를 받은 학생들의 수를 구하기 위해 배열(케이스)을 돌며 학생들의 점수와 평균점수를 비교
  // 학생의 점수가 평균점수보다 높다면 count를 1씩 증감한다. 
  for(let n = 1; n < arr.length; n++){
    if(arr[n] > average){
      count++;
      // console.log(count);
    }
  }

  // 변수 ratio에 평균보다 높은 점수를 받은 학생들의 비율을 구해 할당해준다. 
  let ratio = (count / Number(arr[0]))* 100;

  // 비율을 반올림하여 소수점 3자리 까지 나타나게 하기 위해  toFixed 메서드를 사용한다
  // number.toFixed(value) : 소수점 자리수를 value까지 고정한다.(이때 반올림이 됨) 
  // 소수점 자리수까지 맞춰진 비율을 result 변수에 할당하여 
  // 템플릿리터럴을 이용해 문자열로 비율(result)에 '%'를 붙여주어 출력해준다
  result = ratio.toFixed(3);
  console.log(`${result}%`); 

  // 처음 생각했던 return을 사용하게 된다면 for문이 종료되므로 사용할 수 없다..! 
  // console.log()를 이용하여 출력했지만 console이 아닌 다른 방법은 없을까?... 
}

