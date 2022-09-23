function solution(n) {
    let i = 1;
    let result = false;
    while(i*i <= n){ 
        i++
    }
    if((i-1)*(i-1) === n){
        result = true
    }
    if(result){
        return i*i;
    }else{
        return -1
    }
}

//6점 
//20분 
//isInteger 사용 