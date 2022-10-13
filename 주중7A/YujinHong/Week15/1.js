function solution(nums) {
  // 중복 제거
  let setNums = new Set(nums);
  setNums = [...setNums];

  return nums.length / 2 < setNums.length ? nums.length / 2 : setNums.length;
}
