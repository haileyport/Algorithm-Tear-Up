function solution(left, right) {
  
  
    const odd =(num) =>{
      let result =[]
      for(let i = 1; i<= num; i++){
        if(num % i === 0){
          result.push(i)
        }
      }
      return result.length
    }
    
    let sum = 0
    for(let i = left ; i <= right ; i++){
      if(odd(i) % 2 === 0){
        sum = sum + i
      }else{
        sum = sum -i
      }
    }
    
    return sum
    
  }