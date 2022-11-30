function solution(s) {     
    if(s.length === 4 || s.length === 6){
        return s.split("").every(el => !isNaN(el))
    } else {
        return false;
    }
}
    