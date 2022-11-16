/*
통과 여부 : 통과
시간 : 30분
점수 : +2

틀렸던 이유 : 괄호를 잘 닫자 ㅎ..... return 위치 잘 확인하자...
테스트 1 〉	통과 (0.28ms, 33.5MB)
테스트 2 〉	통과 (0.24ms, 33.4MB)
테스트 3 〉	통과 (0.09ms, 33.4MB)
테스트 4 〉	통과 (0.19ms, 33.4MB)
테스트 5 〉	통과 (0.20ms, 33.4MB)
테스트 6 〉	통과 (0.19ms, 33.4MB)
테스트 7 〉	통과 (0.20ms, 33.5MB)
테스트 8 〉	통과 (0.18ms, 33.4MB)
*/

/**
 *
 * @param {*} n  지도 한 변의 길이
 * @param {*} arr1
 * @param {*} arr2
 * @returns
 */
function solution(n, arr1, arr2) {
  let convert2 = (n, arr) => {
    return arr.map((el) => {
      return el.toString(2).padStart(n, 0);
    });
  };

  let list1 = convert2(n, arr1);
  let list2 = convert2(n, arr2);


  let answer = new Array(n).fill("");

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (list1[i][j] === "1" || list2[i][j] === "1") {
        answer[i] += "#";
      } else {
        answer[i] += " ";
      } 
    }
  }
  return answer;
}

/**
 * 2진수에서 1인 부분은 벽임.
 * 자릿수 맞추기 padStart(n, 0)
 * 아 forEach 말고 map하면 따로 안해도 됐는데
 */
let nn = 5;
let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];
console.log(solution(nn, arr1, arr2));
