function isPrime(num){
    if(num === 1){
        return false;
    }
    
    if(num === 2 || num === 3){
        return true;
    }
    
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    
    return true;
}

function solution(nums) {
    // 서로 다른 3개를 더했을 때 소수가 되는 경우
    let count = 0;
    
    for(let i = 0; i < nums.length - 2; i++){
        for(let j = i+1; j < nums.length - 1; j++){
            for(let k = j+1; k < nums.length; k++){
                let sum = nums[i] + nums[j] + nums[k];
                
                if(isPrime(sum)) count++;
            }
        }
    }
    
    return count;
}