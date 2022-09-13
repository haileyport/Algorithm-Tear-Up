function solution(n, m) {
    var answer = [];
    let Least = 1; //소수들의 최소공배수
    for(let i = 2; i <= Math.min(n, m); i++){
        if(n%i === 0 && m%i === 0) Least = i;
    }
    answer.push(Least) //최소공배수
    answer.push(n*m/Least) //최대공약수
    return answer;
}
