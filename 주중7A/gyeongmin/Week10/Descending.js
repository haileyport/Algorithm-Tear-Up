function solution(n) {
    return Number(String(n).split('').sort((a,b)=>b-a).map(el=>Number(el)).join(''))
}
