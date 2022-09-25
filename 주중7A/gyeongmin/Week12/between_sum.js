function solution(a, b) {
    var answer = 0;

    let minNum = Math.min(a,b)
    let maxNum = Math.max(a,b)
    for(i = minNum; i <= maxNum; i++){
        (a !== b)? answer += i :  answer = a;
    }   
    return answer;
}
