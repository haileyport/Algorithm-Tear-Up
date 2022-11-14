/* 10분 100 100 */

function solution(s) {
    s = s.split(" ").sort((a,b) => a-b);
    return `${s[0]} ${s[s.length-1]}`
    
}