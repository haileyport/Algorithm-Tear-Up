function solution(nums) {
    let select = nums.length / 2;
    let newSet = new Set(nums);
    console.log(newSet.size)
    if(newSet.size > select) return select
    return newSet.size
}