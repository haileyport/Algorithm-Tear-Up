/**
 * 통과 여부 : 통과
 * 시간 : 3분
 * 점수 : +1 ㅠ
 * 

테스트 1 〉	통과 (0.14ms, 33.4MB)
테스트 2 〉	통과 (0.13ms, 33.5MB)
테스트 3 〉	통과 (0.13ms, 33.5MB)
테스트 4 〉	통과 (0.07ms, 33.4MB)
테스트 5 〉	통과 (0.07ms, 33.5MB)
테스트 6 〉	통과 (0.07ms, 33.4MB)
테스트 7 〉	통과 (0.09ms, 33.4MB)
테스트 8 〉	통과 (0.07ms, 33.4MB)
테스트 9 〉	통과 (0.07ms, 33.4MB)
 */
function solution(numbers) {
    let number = Array.from({length:10}, (v,i)=>i);
    return number.reduce((acc, cur, idx) => {
//          숫자들에 numbers에 있는 게 포함 안 되어있으면
        return !(numbers.includes(cur))? acc += cur: acc;
    },0)
}