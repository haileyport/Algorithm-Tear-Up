function solution(numbers) {
    var answer = '';

    numbers.sort((a, b) => {
        let aNextb = String(a) + String(b)
        let bNexta = String(b) + String(a)

        return bNexta - aNextb
    })
    answer = numbers.join('')
    if (answer[0] === '0') return '0'
    return answer;
}