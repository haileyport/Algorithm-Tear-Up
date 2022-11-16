// [PGS] 모의고사 / leve1
// 난이도 :  level 1
// 풀이시간 :
// 점수 :

/*
문제
수포자는 수학을 포기한 사람의 준말입니다. 
수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 
수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 
가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한 조건
시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
입출력 예
answers	return
[1,2,3,4,5]	[1]
[1,3,2,4,2]	[1,2,3]
입출력 예 설명
입출력 예 #1

수포자 1은 모든 문제를 맞혔습니다.
수포자 2는 모든 문제를 틀렸습니다.
수포자 3은 모든 문제를 틀렸습니다.
따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

입출력 예 #2

모든 사람이 2문제씩을 맞췄습니다.
*/

/*
< 의사코드 >
일단 1번과 2번과 3번의 배열을 정의하고 answers배열과 맞는지 확인 한 후 for문으로 돌면서
i번째와 맞는지 세고 그 count를 세어준다.

1. 각 찍기 방법의 배열 만들기
2. 카운트 담을 곳 선언
3. for문으로 돌리면서 확인
4. 채점 결과 많은 문제 맞춘 사람 배열에 담기
*/

function solution(answers) {
  let result = [];

  let a = [1, 2, 3, 4, 5];
  let b = [2, 1, 2, 3, 2, 4, 2, 5];
  let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let countA = 0;
  let countB = 0;
  let countC = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === a[i]) {
      countA++;
    }
    if (answers[i] === b[i]) {
      countB++;
    }
    if (answers[i] === c[i]) {
      countC++;
    }
  }

  if ((countA === countB) === countC) {
    result = [1, 2, 3];
  }
  if (Max.math(countA, countB, countC) === countA) {
    result.push(1);
  } else if (Max.math(countA, countB, countC) === countB) {
    result.push(2);
  } else if (Max.math(countA, countB, countC) === countB) {
    result.push(3);
  }

  return result;
}
/*
래퍼런스 에러..?

*/

function solution(answers) {
  let result = [];

  let a = [1, 2, 3, 4, 5];
  let b = [2, 1, 2, 3, 2, 4, 2, 5];
  let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let countA = 0;
  let countB = 0;
  let countC = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === a[i]) {
      countA++;
    }
    if (answers[i] === b[i]) {
      countB++;
    }
    if (answers[i] === c[i]) {
      countC++;
    }
  }
  // 채점 결과, 가장 많은 문제를 맞힌 사람을 배열에 담아 return
  let counts = [countA, countB, countC];
  let max = Math.max(...counts);
  for (let j = 0; j < 3; j++) {
    if (counts[j] === max) {
      result.push(j + 1);
    }
  }

  return result;
}

/*
테스트 1 〉	통과 (0.06ms, 33.3MB)
테스트 2 〉	통과 (0.06ms, 33.4MB)
테스트 3 〉	통과 (0.06ms, 33.4MB)
테스트 4 〉	통과 (0.06ms, 33.4MB)
테스트 5 〉	실패 (0.15ms, 33.5MB)
테스트 6 〉	실패 (0.16ms, 33.5MB)
테스트 7 〉	실패 (0.51ms, 33.4MB)
테스트 8 〉	통과 (0.27ms, 33.4MB)
테스트 9 〉	실패 (32.75ms, 36.7MB)
테스트 10 〉	실패 (0.51ms, 33.5MB)
테스트 11 〉	실패 (36.14ms, 36.7MB)
테스트 12 〉	실패 (0.78ms, 33.6MB)
테스트 13 〉	실패 (0.18ms, 33.4MB)
테스트 14 〉	통과 (28.96ms, 36.8MB)
*/
