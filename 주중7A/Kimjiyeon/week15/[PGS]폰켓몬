function solution(nums) {
    var answer = [];
    var max = nums.length / 2;
        
    for(let i = 0; i < nums.length; i++) {
        if(answer.length < max) {
            if(!answer.includes(nums[i])) {
                answer.push(nums[i]);
            }
        }
    }
    
    return answer.length;    
}
