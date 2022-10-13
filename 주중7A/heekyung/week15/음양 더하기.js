function solution(absolutes, signs) {
    var answer = 0
    for (let i = 0; i < absolutes.length; i++) {
        signs[i] ? answer += absolutes[i] : answer += -absolutes[i]

    }
    return answer;
}
