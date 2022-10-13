const getCombinations = function (arr, selectNumber) {
  if (selectNumber === 1) return arr.map((el) => [el]); 

  const results = [];
  arr.forEach((fixed, index) => {
    const combinations = getCombinations(arr.slice(index + 1), selectNumber - 1); 
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached); 
  });    

  return results; 
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  } 
  return true;
}

function solution(nums) { 
  const combinations = getCombinations(nums, 3); //[[1,2,3], [1,2,4], ...]

  let answer = 0;
  combinations.forEach(set => {
    let sum = set.reduce((acc, cur) => acc + cur);
    if (isPrime(sum)) answer++;
  })

  return answer;
}
