function solution(s) {
    let answer = s.length;
    
    if(answer % 2 === 0){
        return s[(answer/2) - 1] + s[answer/2]
    } return s[((answer + 1) / 2) - 1]
}