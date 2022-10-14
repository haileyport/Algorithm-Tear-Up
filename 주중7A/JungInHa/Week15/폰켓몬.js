function solution(nums) {
  const types = new Set(nums).size; // 폰켓몬 종류 수
  const selection = nums.length / 2; // 고를 수 있는 개수
  const answer = (types <= selection) ? types : selection;
  return answer;
}
