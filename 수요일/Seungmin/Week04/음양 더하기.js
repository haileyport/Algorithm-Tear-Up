function solution(absolutes, signs) {
    var answer = 0;
    
    for(let i = 0; i<absolutes.length; i++){
        signs[i] ? answer = answer + absolutes[i] : answer = answer - absolutes[i]
    }
    return answer;
}