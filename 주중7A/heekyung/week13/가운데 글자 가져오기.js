function solution(s) {
    var answer = '';
    if (s.length % 2) {
        s = s.slice((s.length - 1) / 2)
        answer = s.slice(0, 1)
    } else {
        s = s.slice((s.length - 1) / 2)
        answer = s.slice(0, 2)
    }

    return answer;
}
