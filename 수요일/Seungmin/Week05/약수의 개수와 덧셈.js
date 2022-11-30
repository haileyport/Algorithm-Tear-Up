function solution(left, right) {
    var answer = 0;
    for(let i = left; i <= right; i++){
        if (Number.isInteger(Math.sqrt(i))){
            answer = answer - i
        } else{
            answer = answer + i
        }
    }
    return answer;
}