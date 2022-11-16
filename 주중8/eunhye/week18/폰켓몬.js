function solution(nums) {
  // N/2마리 가져갈 수 있음(짝수)
  // 가장 많은 종류의 폰켓몬 선택
  const len = nums.length / 2;
  const poketmon = [...new Set(nums)].length;
  return poketmon > len ? len : poketmon;
}

// 1점
