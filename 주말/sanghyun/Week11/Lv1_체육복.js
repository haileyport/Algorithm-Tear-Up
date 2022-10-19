function solution(n, lost, reserve) {
  let arr = new Array(n).fill(1);
  for(let i = 0; i < lost.length; i++){
      let toLost = lost[i]-1;
      arr[toLost]--;
  }
  for(let i = 0; i < reserve.length; i++){
      let toReserve = reserve[i]-1;
      arr[toReserve]++;
  }
  
  for(let i = 0; i < arr.length; i++){
      if(arr[i] === 2){
          if(arr[i-1] === 0){
              arr[i]--;
              arr[i-1]++;
          }else if(arr[i+1] === 0){
              arr[i]--;
              arr[i+1]++;
          }
      }
  }
  return arr.filter(el => el !== 0).length
}