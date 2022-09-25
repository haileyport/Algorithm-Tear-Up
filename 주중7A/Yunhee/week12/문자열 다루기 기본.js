function solution(s) {
    // 문자열의 길이가 4 혹은 6이고, 숫자로 구성되어 있으면 true, 아니라면 false
    if(s.includes("e")){
        return false;
    }
    
    return !isNaN(+s) && (s.length === 4 || s.length === 6) ? true : false;
}