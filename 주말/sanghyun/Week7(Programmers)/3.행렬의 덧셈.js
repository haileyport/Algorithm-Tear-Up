function solution(arr1, arr2) {
  const result = [];
  for(let i = 0; i < arr1.length; i++){
      let prompt = [];
      for(let j = 0; j < arr1[i].length; j++){
          prompt.push(arr1[i][j] +arr2[i][j]);
      }
      result.push(prompt);
  }   
  return result;
}