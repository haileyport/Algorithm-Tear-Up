// [PGS] 카펫 / leve2
// 난이도 :  leve2
// 풀이시간 :
// 점수 : 실패!

/*
문제
Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

carpet.png

Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.

Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한사항
갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.
입출력 예
brown	yellow	return
10	2	[4, 3]
8	1	[3, 3]
24	24	[8, 6]
/*
<의사코드>
 
4x3 = 12
10 + 2 = 12
brown과 yellow를 합한 숫자와 return값의 곱한 숫자가 같다.
12 6 4 3 2 1
9 3 1
24 12 8 6 3 2 1

가운데 두 숫자가 가로세로가 됨

1. 더한 숫자 plusNum의 나누어 떨어지는 수들을 모두 구하기
2. 그 숫자 길이가 홀수일 경우
  - 홀수면서 길이가 3이하일 경우 가운데 인덱스를 두번 곱하기
  - 홀수면서 길이가 4이상일 경우 
    - 나누기를 해서 i+1번째와 i번째를 곱한것이 plusNum과 같을 경우 return
    - 나누기를 해서 i-1번째와 i번째를 곱한 것이 plusNum과 같을 경우 return
3. 짝수일 경우
  길이를 2로 나눠서 나온 숫자의 i-1번째와 i번째를 배열로 리턴

*/

function solution(brown, yellow) {
  let plusNum = brown + yellow;
  let numArr = [];
  let result = [];
  for (let i = 1; i <= plusNum; i++) {
    if (plusNum % i === 0) {
      numArr.push(i);
    }
  }
  if (numArr.length % 2 === 0) {
    let num = numArr.length / 2;
    result.push(numArr[num]);
    result.push(numArr[num - 1]);
  } else {
    if (numArr.length <= 3) {
      result.push(numArr[1]);
      result.push(numArr[1]);
    } else {
      let num = numArr.length / 2;
      Math.floor(num);
      result.push(numArr[num - 1]);
      result.push(numArr[num]);
    }
  }
  return result;
}
/*
정확성  테스트
테스트 1 〉	실패 (0.09ms, 33.4MB)
테스트 2 〉	통과 (0.06ms, 33.5MB)
테스트 3 〉	실패 (4.86ms, 36.6MB)
테스트 4 〉	실패 (0.22ms, 33.5MB)
테스트 5 〉	통과 (0.34ms, 33.5MB)
테스트 6 〉	실패 (4.13ms, 36.6MB)
테스트 7 〉	실패 (5.74ms, 36.5MB)
테스트 8 〉	통과 (4.81ms, 36.6MB)
테스트 9 〉	통과 (5.71ms, 36.7MB)
테스트 10 〉	통과 (6.33ms, 36.6MB)
테스트 11 〉	통과 (0.08ms, 33.5MB)
테스트 12 〉	통과 (0.06ms, 33.4MB)
테스트 13 〉	통과 (0.09ms, 33.4MB)
 */
