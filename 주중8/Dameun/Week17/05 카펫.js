function solution(brown, yellow) {
  const yellowNum = [];
  let result = [];
  for (let i = 1; i <= Math.sqrt(yellow); i++) {
    if (yellow % i === 0) {
      if (yellow / i != i) yellowNum.push(yellow / i);
      if (i * i === yellow) yellowNum.push(i);
      yellowNum.push(i);
    }
  }
  for (let i = 0; i <= yellowNum.length; i = i + 2) {
    let width = yellowNum[i] + 2;
    let hight = yellowNum[i + 1] + 2;
    if ((width + hight) * 2 - 4 === brown) {
      result = [width, hight];
    }
  }
  return result;
}

solution(8, 9);

//노란 카펫 갯수
// x * y  만큼의 갯수에서 2개씩 뺀 사각형의 크기
//  x-2 * y-2
//노란 카펫 갯수의 약수를 구함(앞이 더 크거나 같을 때까지)
//갈색 카펫 갯수의 크기 =
//약수 x와 y
// 2x + 2y -4 = 갈색

//20분
//3점
// /테스트 1 〉	통과 (4.54ms, 33.5MB)
// 테스트 2 〉	통과 (4.27ms, 33.5MB)
// 테스트 3 〉	통과 (3.38ms, 33.5MB)
// 테스트 4 〉	통과 (3.20ms, 33.5MB)
// 테스트 5 〉	통과 (3.38ms, 33.5MB)
// 테스트 6 〉	통과 (3.39ms, 33.6MB)
// 테스트 7 〉	통과 (5.56ms, 33.6MB)
// 테스트 8 〉	통과 (4.41ms, 33.6MB)
// 테스트 9 〉	통과 (4.81ms, 33.6MB)
// 테스트 10 〉	통과 (5.12ms, 33.7MB)
// 테스트 11 〉	통과 (2.93ms, 33.5MB)
// 테스트 12 〉	통과 (4.35ms, 33.7MB)
// 테스트 13 〉	통과 (3.22ms, 33.6MB)
