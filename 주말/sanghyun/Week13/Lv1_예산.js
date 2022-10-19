function solution(d, budget) {
  let sorted = d.sort((a, b) => a - b)
  let counter = 0
  for(let i = 0; i < sorted.length; i++){
      if(budget - sorted[i] < 0){
          break
      }
      counter ++;
      budget = budget - sorted[i];
  }
  return counter;
  
}