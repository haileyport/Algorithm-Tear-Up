function solution(num) {
    var answer = num;
    
    if(answer===1) return 0;
    
    for(let i = 1; i <=500; i++){        
        
        if(answer%2 === 0){
            answer = answer/2;
        } else {
            answer = answer*3 + 1
        }
        
        if(answer === 1) return i;
    }
    
    return -1
}