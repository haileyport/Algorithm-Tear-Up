function solution(a, b) {
    var answer = '';
    let date = {
        '1': 31,
        '2': 29,
        '3': 31,
        '4': 30,
        '5': 31,
        '6': 30,
        '7': 31,
        '8': 31,
        '9': 30,
        '10': 31,
        '11': 30,
    }

    let sumDay = 0
    for (let i = 1; i < a; i++) {
        sumDay += date[i]
    }
    sumDay += b
    sumDay--
    //1월 1일
    let num = sumDay % 7


    if (num === 0) { return 'FRI' }
    else if (num === 1) return 'SAT'
    else if (num === 2) return 'SUN'
    else if (num === 3) return 'MON'
    else if (num === 4) return 'TUE'
    else if (num === 5) return 'WED'
    else if (num === 6) return 'THU'


}
