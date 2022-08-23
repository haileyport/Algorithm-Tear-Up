function solution(price, money, count) {
    var answer = 0;
    
    let need = 0;

    for(let i = 1; i <= count; i++){  
        need += (price * i)
    }

    if(need <= money) {
        return 0;
    }
    answer = need - money
    return answer;
}
