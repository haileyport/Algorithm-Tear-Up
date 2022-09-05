function solution(n) {

    // n이 양의 정수 x의 제곱이라면
    // if (Math.sqrt(n) % 1 === 0){
    //     // x+1의 제곱 리턴
    //     return Math.pow(Math.sqrt(n) + 1, 2);
    // }else{
    //     // -1 리턴
    //     return -1;
    // }
    
    return Math.sqrt(n) % 1 ? -1 : Math.pow(Math.sqrt(n) + 1, 2);
    
}


// isInteger -> 정수형인지 확인하는 메소드