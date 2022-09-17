// [PGS] N개의 최소공배수, +8

// 테스트 1 〉	통과 (0.05ms, 33.4MB)
// 테스트 2 〉	통과 (0.07ms, 33.4MB)
// 테스트 3 〉	통과 (0.05ms, 33.5MB)
// 테스트 4 〉	통과 (0.08ms, 33.6MB)
// 테스트 5 〉	통과 (0.05ms, 33.4MB)
// 테스트 6 〉	통과 (0.08ms, 33.5MB)
// 테스트 7 〉	통과 (0.06ms, 33.5MB)
// 테스트 8 〉	통과 (0.05ms, 33.5MB)
// 테스트 9 〉	통과 (0.05ms, 33.4MB)
// 테스트 10 〉	통과 (0.12ms, 33.4MB)

// 유클리드 호제법 이용하는 거 같은데...
// 최소공배수 구하는 것을 이어나가면 최종적으로 구할 수 있음! 

// 재귀를 이용하는 유클리드 함수 생성
// 나머지가 0이 될 때까지(최대공약수를 구할 때 까지) 재귀돌림
const euclidean = (a,b) => {
  let rest = a % b;
  
  return rest === 0 ? b : euclidean(b, rest); 
  
}

function solution(arr) {
  let result = arr[0];
  
  for(let i = 1; i < arr.length; i++){
    // euclidean 함수 리턴값으로 나온 최대공약수를 이용해 최소공배수를 구한 값을 바로 result에 할당해준다
    // 최소공배수 = 두 수의 곱 / 최대공약수  
      result = (result * arr[i]) / euclidean(result, arr[i]);
  }
  
  return result; 
}
