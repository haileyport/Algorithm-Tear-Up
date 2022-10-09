function solution(s) {
    var answer = '';
    const numbers = s.split(' ');
    answer = `${Math.min(...numbers)} ${Math.max(...numbers)}`
    return answer;
}