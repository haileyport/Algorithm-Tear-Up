function solution(left, right) {
    var answer = 0;
    //제곱근이 있으면 약수의 개수가 홀수이므로
    for(i = left; i <= right; i++){
        //제곱근이 있으면? 빼주고 : 더해주기
        (Number.isInteger(Math.sqrt(i))) ? answer-=i : answer+=i
    }
    return answer;
}
