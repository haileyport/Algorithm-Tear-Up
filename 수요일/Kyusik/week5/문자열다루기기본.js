function solution(s) {
    if(s.length === 4 || s.length === 6){
        return s.split("").every(c => !isNaN(c))
    } else {
        return false;
    }
}