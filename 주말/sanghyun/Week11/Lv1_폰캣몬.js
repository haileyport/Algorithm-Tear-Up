function solution(nums) {
  let answer = 0
  let canPick = (nums.length)/2
  let hash = {};
  nums.forEach(el => 
              hash[el] = el)
  let uniqueNum = (Object.keys(hash).length)
  if(canPick < uniqueNum){
      return canPick 
  }else{
     return uniqueNum
  }
  
}