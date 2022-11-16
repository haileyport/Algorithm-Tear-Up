function solution(s) {
    var answer = false;
    
    if (s.length === 4 || s.length === 6) answer = true;
    
    for (let i = 0; i < s.length; i++){
        if (isNaN(Number(s[i]))){
            return false;
        }
    }
    
    return answer;
}