function solution(n, k) {
    let kNum = n.toString(k)
    
    let numArr = kNum.split('0')
    let answer = 0
    
    function isPrime(num) {
        if (num <= 1) {
            return false
        }
      if(num === 2) {
        return true;
      }

      for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
        if(num % i === 0){
          // 한 번이라도 나누어 졌으니 소수가 아니므로 return false
          return false; 
        }
      }
      // 나눠진 수가 없다면 해당 수는 소수이므로 return true
      return true; 
    }
    
    for(let k=0; k<numArr.length; k++){
        if(isPrime(numArr[k])){
            answer++
        }
        
    }
    
    
    
    return answer;
}
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0