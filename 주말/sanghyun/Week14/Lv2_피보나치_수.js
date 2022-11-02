function solution(n) {
  let memo = [0 , 1, 1];

  for (let i = 3; i <=n ; i++){
      memo[i] = (memo[i-2] % 1234567) + (memo[i-1] % 1234567);
  }
  return memo[n] % 1234567;

  
// 재귀적으로 하면 시간 초과(13번과 14번 런타임 에러 발생)
//     let memo = [0, 1, 1]
  
//      const aux = (n) => {
//         if (memo[n] !== undefined) return memo[n];
//         memo[n] = aux(n - 1) % 1234567 + aux(n - 2) % 1234567;
//         return memo[n];
//     };
  
//     return aux(n) % 1234567;
//     if (n <= 2) return 1;
  
//     return (solution(n - 2) + solution(n - 1)) % 1234567;
}