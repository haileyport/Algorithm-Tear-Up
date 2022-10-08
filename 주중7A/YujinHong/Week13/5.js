function solution(d, budget) {
  d.sort((a, b) => a - b)
  
  let sum = 0
  let count = 0
  for(const el of d){
      sum += el
      if(sum > budget) break
      count++
  }
  
  return count
}