function solution(num) {
    let count = 0;
    
    while(num !== 1){
        if(num % 2 === 0){
            num= num / 2
        } else {
            num = num * 3 + 1
        } count++;
    }
    if(count >= 500){
        return -1
    }else {
        return count;
    }
}