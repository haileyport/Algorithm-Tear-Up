function solution(n, lost, reserve) {
    //만약 1부터 5까지 라 할때 
    //여별체육복이 있어야만 빌려줄수 잇다
    let count = 0
    let result= []
   
    for(let i =0; i<n; i++){
      result[i]= 1
    }
  for(let i=0; i<lost.length; i++){
      result[lost[i]-1]= 0
  }
    for(let i=0; i<reserve.length; i++){
      result[reserve[i]-1] +=1
  }
    
    for(let i =0; i<n; i++){
      if(result[i-1]===2 && result[i]===0){
        result[i-1]=1
        result[i]=1
      }else if(result[i+1]===2 && result[i]===0){
        result[i+1]=1
        result[i]=1
      }
    }
    
    for(let i=0; i<n; i++){
      if(result[i]>0){
        count++
      }
    }
    return count
  }