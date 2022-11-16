/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (6.85ms, 38.3MB)
테스트 2 〉	통과 (6.95ms, 39.2MB)
테스트 3 〉	통과 (2.22ms, 34.1MB)
테스트 4 〉	통과 (1.17ms, 34.1MB)
테스트 5 〉	통과 (8.18ms, 39.3MB)
테스트 6 〉	통과 (11.75ms, 40.7MB)
테스트 7 〉	통과 (1.03ms, 33.6MB)
테스트 8 〉	통과 (25.47ms, 46.5MB)
테스트 9 〉	통과 (3.70ms, 34.5MB)
테스트 10 〉	통과 (56.08ms, 44.5MB)
테스트 11 〉	통과 (0.46ms, 33.6MB)
테스트 12 〉	통과 (0.39ms, 33.5MB)
테스트 13 〉	통과 (0.55ms, 33.6MB)
테스트 14 〉	통과 (0.42ms, 33.5MB)
테스트 15 〉	통과 (0.55ms, 33.4MB)
테스트 16 〉	통과 (18.82ms, 45.3MB)
테스트 17 〉	통과 (17.86ms, 46.9MB)
테스트 18 〉	통과 (0.50ms, 33.5MB)
테스트 19 〉	통과 (0.18ms, 33.5MB)
테스트 20 〉	통과 (23.20ms, 47.1MB)
테스트 21 〉	통과 (19.10ms, 47.1MB)
테스트 22 〉	통과 (5.14ms, 38.2MB)
테스트 23 〉	통과 (0.20ms, 33.6MB)
테스트 24 〉	통과 (15.29ms, 44.8MB)
테스트 25 〉	통과 (14.07ms, 44.8MB)
테스트 26 〉	통과 (0.15ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(nums) {
  // 소수 판별 함수
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // 조합 만드는 함수
  function getCombi(arr, selectNum) {
    let result = [];
    if (selectNum === 1) return arr.map((el) => [el]);
    arr.forEach((fixed, idx, origin) => {
      const tails = arr.slice(idx + 1);
      const combies = getCombi(tails, selectNum - 1);
      const attached = combies.map((el) => [fixed, ...el]);
      result.push(...attached);
    });
    return result;
  }

  // 각 조합을 얻어서(getCombi) 조합의 합을 구한뒤(reduce) 각 합의 소수여부를 판별한다(isPrime).
  const combiSumArr = getCombi(nums, 3).map((el) =>
    isPrime(el.reduce((a, b) => a + b))
  );

  // 소수의 수를 리턴한다.
  return combiSumArr.filter((el) => el === true).length;
}
