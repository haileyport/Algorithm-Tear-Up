function solution(n) {
    // n+1의 배열을 생성한 다음 true를 할당한다.
    const arr = Array(n+1).fill(true);
    const root = Math.sqrt(n);      
    
    // 배열의 길이만큼 반복하면서 소수인지 판단한다.
    for(let i = 0; i <= root; i++){
        // 0과 1은 소수가 아니므로 false로 할당한다.
        if(i === 0 || i === 1){
            arr[i] = false;
        }
        
        // 만약 arr[i]가 소수인 경우 소수의 배수는 소수가 아니므로 false를 할당한다.
        if(arr[i]){
            for(let j = i; i * j < n+1; j++){
                arr[i*j] = false;
            }
        }
    }
    
    // 배열의 요소가 true인 것만 가져와서 개수를 리턴한다.
    return arr.filter(e => e).length;
}