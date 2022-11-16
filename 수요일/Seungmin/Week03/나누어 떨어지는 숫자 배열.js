function solution(arr, divisor) {
    
    var answer = arr.filter(el => el%divisor === 0).sort((a,b) => a-b);
    
    if(answer.length === 0) return [-1]
    
    return answer;
}