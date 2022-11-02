function solution(s) {
    //0을 제외한 길이를 다시 2진수로 바꾸는것 
    //1이될때 까지 반복
    //회차가 첫번째 인자 총 0의 제거 개수가 두번째 인자
    //
    
    
    
      // let result = s.split("0").join("").length.toString(2)
      // return result;
    let num = 0
    let sum = 0
    let numsum =0
    while(s.length > 1){
      let result=s.split("0").join("").length.toString(2)
      
      sum = s.length - s.split("0").join("").length
      numsum = numsum + sum
  
      num ++
      s= result
      if( s.length === 1){
        return [num, numsum]
      }
    }
  
    
    
  }
  