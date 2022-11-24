/*
걸린시간
5분 100/100

정확성 테스트
테스트 1 〉	통과 (0.05ms, 33.5MB)
테스트 2 〉	통과 (3.12ms, 34MB)
테스트 3 〉	통과 (0.05ms, 33.5MB)
테스트 4 〉	통과 (0.08ms, 33.5MB)
테스트 5 〉	통과 (0.07ms, 33.4MB)
테스트 6 〉	통과 (0.06ms, 33.5MB)
테스트 7 〉	통과 (0.08ms, 33.4MB)
테스트 8 〉	통과 (0.07ms, 33.6MB)
테스트 9 〉	통과 (0.58ms, 34.2MB)
테스트 10 〉	통과 (6.15ms, 36.2MB)
테스트 11 〉	통과 (2.39ms, 34.4MB)
*/


function solution(s) {
    let zero = 0, count = 0;
    let replacedS = s;
    while(replacedS!=="1") {
        let temp = replacedS.replaceAll("0", ""); // 0을 모두 제거
        zero += replacedS.length - temp.length; // 0 제거 전과 제거 후의 차이
        replacedS = temp.length.toString(2) + ""; // 길이를 이진 변환 후 string화
        count += 1; // 제거한 횟수 1 추가
    }
    return [count, zero]
}