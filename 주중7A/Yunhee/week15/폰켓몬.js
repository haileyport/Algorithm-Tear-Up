function solution(nums) {
    // n마리의 폰켓몬을 선택하는 방법 중 가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아 종류 번호의 개수를 리턴
    const n = nums.length / 2;
    const set = new Set(nums);
    
    return [...set].length > n ? n : [...set].length;
}