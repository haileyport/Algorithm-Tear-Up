function solution(num) {
    var answer = 0;
    for(let i = 0; num !== 1; i++){
        if(num % 2 === 0){
            num = num / 2;
        }else if(num % 2 === 1){
            num = num * 3 + 1;
        }
        if(i >= 500){
            return -1;
        }
        answer++;
    }
    return answer;
}