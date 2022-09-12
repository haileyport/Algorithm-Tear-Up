function solution(s) {
    return s[0] === '+' ? Number(s.slice(1, s.length)) : Number(s)
}
