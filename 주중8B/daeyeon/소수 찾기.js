/* 10분 100 75 25 */
//에라토스테네스의 체로 풀었습니다.

function solution(n) {
    
    let count = 0;
    
    for(let i = 2 ; i <=n ; i++){
            count = isdecimal(i) ? count+1 : count;
    }
    return count;
}

function isdecimal(num){
    // square root       
    let sqrt = Math.floor(Math.sqrt(num));
    if ( sqrt >=2 )
        if(num%2 === 0 ) return false;

    for(let i = 3 ; i <= sqrt ; i+=2){
        if(num % i === 0)
            return false;
    }
        return true;
    
}
