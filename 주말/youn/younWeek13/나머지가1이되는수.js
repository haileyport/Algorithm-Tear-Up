const solution = (n) => {


    let result = []
    
  
    
    for(let i = 0 ; i < n ; i++){
      if(n % i === 1){
        result.push(i)
      }
    }
  
    return Math.min(...result)
  }