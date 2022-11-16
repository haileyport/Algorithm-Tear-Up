function solution(n, m) {
    var answer = [];
    let nNumber = [];
    let nAndM = [];
    for(let i = n; i >= 1; i--){
        if(n%i === 0){
             nNumber.push(i)
        }
        if(n%i === 0 && m%i === 0 && i !== 1){
            nAndM.push(i)
        }
    }
    answer.push(nNumber.filter(el => m%el === 0)[0])
    answer.push(n*m/answer[0])
    return answer;
}

//20분 정도
//최대공약수 X최소공배수 = 두 수의 곱

