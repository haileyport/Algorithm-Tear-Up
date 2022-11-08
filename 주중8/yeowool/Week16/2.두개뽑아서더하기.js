// [PGS] 두 개 뽑아서 더하기 / leve1
// 난이도 :  level 1
// 풀이시간 : 1시간
// 점수 : +3

/*
문제
정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

제한사항
numbers의 길이는 2 이상 100 이하입니다.
numbers의 모든 수는 0 이상 100 이하입니다.
입출력 예
numbers	result
[2,1,3,4,1]	[2,3,4,5,6,7]
[5,0,2,7]	[2,5,7,9,12]
입출력 예 설명
입출력 예 #1

2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)
3 = 2 + 1 입니다.
4 = 1 + 3 입니다.
5 = 1 + 4 = 2 + 3 입니다.
6 = 2 + 4 입니다.
7 = 3 + 4 입니다.
따라서 [2,3,4,5,6,7] 을 return 해야 합니다.
입출력 예 #2

2 = 0 + 2 입니다.
5 = 5 + 0 입니다.
7 = 0 + 7 = 5 + 2 입니다.
9 = 2 + 7 입니다.
12 = 5 + 7 입니다.
따라서 [2,5,7,9,12] 를 return 해야 합니다.
*/

/*
< 의사코드 >

일단 생각나는게 이중for문인데 일단 이렇게 풀어보고 풀리면 코드를 고쳐보도록 하자

1. numbers만큼 이중 for문 시작
2. 더한 숫자 plusNum에 할당
3. result배열에 plusNum이 있는지 확인 한 후 없으면 result에 push
*/

function solution(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let plusNum = numbers[i] + numbers[j];
      if (!result.includes(plusNum)) {
        result.push(plusNum);
      }
    }
    return result;
  }
}

/*
실패!
테스트 1
입력값 〉	[2, 1, 3, 4, 1]
기댓값 〉	[2, 3, 4, 5, 6, 7]
실행 결과 〉	실행한 결괏값 [3,5,6]이 기댓값 [2,3,4,5,6,7]과 다릅니다.
테스트 2
입력값 〉	[5, 0, 2, 7]
기댓값 〉	[2, 5, 7, 9, 12]
실행 결과 〉	실행한 결괏값 [5,7,12]이 기댓값 [2,5,7,9,12]과 다릅니다.
*/

function solution(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const plusNum = numbers[i] + numbers[j];
      if (result.indexOf(plusNum) == -1) {
        result.push(plusNum);
      }
    }
  }
  return result.sort((a, b) => a - b);
}

/*
  테스트 1 〉	통과 (0.07ms, 33.5MB)
테스트 2 〉	통과 (0.10ms, 33.2MB)
테스트 3 〉	통과 (0.10ms, 33.5MB)
테스트 4 〉	통과 (0.09ms, 33.5MB)
테스트 5 〉	통과 (0.19ms, 33.6MB)
테스트 6 〉	통과 (0.19ms, 33.4MB)
테스트 7 〉	통과 (1.35ms, 33.6MB)
테스트 8 〉	통과 (0.55ms, 33.5MB)
테스트 9 〉	통과 (0.37ms, 33.5MB)
  */
