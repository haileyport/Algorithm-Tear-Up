function solution(clothes) {
  let answer = 1;
  
  let typeCount = {}; 
  clothes.map(el => {
      let type = el[1];
      (typeCount[type]) ? typeCount[type]++ : typeCount[type] = 1;
  }) 
  
  let nums = Object.values(typeCount); 

  nums.forEach(num => answer *= (num + 1)) 
  
  return answer - 1; 
}