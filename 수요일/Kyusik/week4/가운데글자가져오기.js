function solution(s) {
    if(s.length % 2 === 0) {
        return s[s.length / 2 - 1] + s[s.length / 2]
    } else {
        return s[parseInt(s.length / 2)]
    }
}