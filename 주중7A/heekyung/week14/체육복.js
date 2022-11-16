function solution(n, lost, reserve) {
    var answer = n - lost.length;
    // reserve = reserve.sort((a,b)=> a-b)
    lost = lost.sort((a, b) => a - b)

    // lost = lost.filter(el => !(reserve.includes(el)))
    for (let j = 0; j < lost.length; j++) {
        if (reserve.includes(lost[j] - 1)) {
            answer++
            reserve = reserve.filter(el => el !== lost[j] - 1)
        }
        else if (reserve.includes(lost[j] + 1)) {
            answer++
            reserve = reserve.filter(el => el !== lost[j] + 1)
        }
        else if (reserve.includes(lost[j])) {
            answer++
            reserve = reserve.filter(el => el !== lost[j])
        }
    }

    return answer;
}