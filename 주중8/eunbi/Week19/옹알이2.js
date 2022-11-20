// 접근 방식이 떠오르지 않아 다른 분의 코드해석해보았습니다! 

// 정규표현식을 이용한 방법 
function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/; // aya,ye,woo,ma 중 해당되는 문자이면서 한번 더 반복되는 경우 
  const regexp2 = /^(aya|ye|woo|ma)+$/; //aya,ye,woo,ma 중 하나로 시작하는 문자열이 하나 이상 존재하면서 끝에 위치한 경우  

  return babbling.reduce((ans, word) => (
    !regexp1.test(word) && regexp2.test(word) ? ++ans : ans
  ), 0);
}