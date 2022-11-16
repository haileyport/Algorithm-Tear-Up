/**
 * 통과 여부 : O
 * 시간 : 10분
 * 점수 : +2
 */

const nums = [3, 3, 3, 2, 2, 2];

function solution1(nums) {
  const deDuplicatedNums = new Set(nums);
  const limit = parseInt(nums.length / 2);

  // Set.size 를 사용하면 길이를 바로 구할 수 있다!
  return deDuplicatedNums.size >= limit ? limit : deDuplicatedNums.size;
}

const result1 = solution1(nums);
console.log(result1);

/*
- 가질 수 있는 최대 폰켓몬의 수는 nums/2 마리 (항상 짝수이다.)

- 가장 많은 종류의 폰켓몬을 가질 수 있는 경우에서, 폰켓몬 종류는 몇마리나 되는지 그 번호 갯수를 return

1. 중복을 제거하면 되지 않을까? 
=> 중복을 제거한 다음에, 제거된 중복 배열의 길이가 nums/2보다 크면 nums/2 만큼을 리턴하고, 그렇지 않으면 중복 배열의 길이만큼 리턴하면 되지 않을까?

*/
