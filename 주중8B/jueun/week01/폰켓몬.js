function solution(nums) {
  // e.g., nums = [3, 3, 3, 2, 2, 4, 4, 3]
  let numSet = new Set(nums); // numSet = { 3, 2, 4 }
  let setSize = numSet.size; // setSize = 3

  // nums로 만든 집합의 사이즈가 nums.length / 2보다 크면

  // 최대 폰켓몬 종류는 nums.length / 2 === 4
  if (setSize > nums.length / 2) return nums.length / 2;
  // 아니면
  // 최대 폰켓몬 종류는 nums로 만든 집합의 사이즈 setSize === 3
  else return setSize;
}
