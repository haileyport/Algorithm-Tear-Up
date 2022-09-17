function solution(num) {
    if(num === 1){
      return 0;
    } 
    let n;
    if(num%2 === 0){
        n = 1+ solution(num/2)
    }else{
        n = 1+ solution(num*3 +1)
    }
  
    if(n<500){
        return n
    }
    return -1;
  }

  //500이 넘으면 풀리지 않는다. 따라서,
  //알고리즘 스터디때 배운 수정하는 방법을 보고 아래와 같이 수정하니 통과가 되었다. 

  function solution(num) {
    function setCount (num){
        if(num === 1){
            return 0;
          } 
          if(num%2 === 0){
              return 1+ setCount(num/2)
          }else{
              return 1+ setCount(num*3 +1)
          }  
    }
    let result = setCount(num)
    if(result<500){
        return result
    }
    return -1;
  }

  //5점! 
