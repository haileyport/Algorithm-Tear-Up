function solution(n) {
    let answer = '수박'
    answer = answer.repeat(Math.floor(n/2))
    {n%2 === 1 ? answer += '수' : answer}
    return answer;
}
//ㅋㅋㅋ