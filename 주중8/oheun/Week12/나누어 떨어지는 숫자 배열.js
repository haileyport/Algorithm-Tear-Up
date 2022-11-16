/**
 * 통과
 * 3분
 * +1
 */

function solution(arr, divisor) {
    let answer = arr.filter(el => el%divisor === 0)
        .sort((a, b) => a-b);
    return answer.length? answer: [-1]
}