function solution(nums) {
  //nums 배열의 각각 요소가 서로 같은 경우에는 제외
  //Map 객체
  let set = [...new Set(nums)]; //중복되는 부분 제거
  console.log(set);
  let limit = nums.length / 2;
  console.log(limit);

  return set.length > limit ? limit : set.length;
}

console.log(solution([3, 3, 3, 2, 2, 2]));
