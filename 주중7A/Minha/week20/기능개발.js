function solution(progresses, speeds) {
    var answer = [0], days = [];
    // 남은 날짜를 세보자
    for(let i = 0; i < progresses.length; i++){
        let left = 100 - progresses[i];
        days.push(Math.ceil(left / speeds[i]))
    }
    console.log('days: ', days) // days:  [ 5, 10, 1, 1, 20, 1 ]
    let max = days[0];          // answers: [0, ]

    for(let i = 0, j = 0; i < days.length; i++){
        if(days[i] <= max) {
            answer[j] += 1;
        } else {
            max = days[i];
            answer[++j] = 1;
        }
    }
    return answer;
}