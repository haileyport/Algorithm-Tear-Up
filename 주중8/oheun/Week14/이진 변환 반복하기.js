/**
 * 통과 여부 : 통과 
 * 시간 : 40분
 * 점수 : + 1 ㅠ
 * 테스트 1 〉	통과 (0.05ms, 33.5MB)
테스트 2 〉	통과 (2.94ms, 33.9MB)
테스트 3 〉	통과 (0.05ms, 33.5MB)
테스트 4 〉	통과 (0.05ms, 33.4MB)
테스트 5 〉	통과 (0.05ms, 33.4MB)
테스트 6 〉	통과 (0.06ms, 33.5MB)
테스트 7 〉	통과 (0.09ms, 33.4MB)
테스트 8 〉	통과 (0.06ms, 33.5MB)
테스트 9 〉	통과 (0.60ms, 34.2MB)
테스트 10 〉	통과 (5.88ms, 36.2MB)
테스트 11 〉	통과 (2.41ms, 34.4MB)
 */

/**
 * 
 * @param {*} s string
 * @returns 이진 변환 횟수, 변환 과정에서 제거된 모든 0의 개수
 */
 function solution(s) {
  
    /*
    while문을 사용해보자
    1. 1이 될 때까지 반복문을 돌린다
        2. 0을 없앤다
        3. 길이를 구한다
        4. 2, 3 반복
    길이차이로 제거된 0의 개수 구할 수 있음
    */

    // 변수 선언 : 변환 횟수, 0의 개수
    // 변환 횟수: 반복 횟수에 따라 증가
    // 0의 개수 : 누적되어야 함.
    let zeroCount = 0;
    let transCount = 0;

    let origin = s.slice(); // 원본 복사

    while(origin.length > 1){
        // 0을 공백으로 변경
        let transS = origin.replaceAll('0', '');
        // 0 제거하기 전 길이와 제거 후 길이의 차로 제거된 0의 개수 구하기
        zeroCount += origin.length - transS.length; 

        // 길이를 2진수로 변환한 값 할당하기
        origin = transS.length.toString(2);
        transCount++;
    }
    return [transCount, zeroCount];
 }
