function solution(nums) {
  let type = [...new Set(nums)];
  let result;
  console.log(type.length);
  if (nums / 2 > type.length) {
    result = type.length;
  } else {
    result = nums / 2;
  }
  return result;
}

solution([3, 1, 2, 3]);

//10분
//1점
