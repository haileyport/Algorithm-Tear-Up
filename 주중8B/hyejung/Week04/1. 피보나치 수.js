/**
 * 통과 여부 : O
 * 시간 : 30분
 * 점수 : + 15
 */

// 시도 3 : 재귀 호출을 사용하면 어느 시점에서는 스택오버플로우가 발생하기 때문에 13, 14 테스트케이스는 통과를 못하는 것 같다.
// 따라서 재귀가 아니라 for문을 사용해야한다. for문으로 직접 수를 계산해서 넣고, 계산된 수를 리턴한다.
function reference(n) {
  const arr = [0, 1, 1];

  // 늘 그렇듯 n 이 0이나 1, 2가 들어오면 값을 알고 있기 때문에 그 값을 리턴해준다.
  if (n <= 1) return arr[n];
  // 그 이외의 경우에는 n까지 반복을 돌아준다. arr 안에 이미 계산된 값을 가지고 직접 값을 계산해준다.
  // 수가 커지기 때문에 각 수를 1234567로 나눈 나머지로 하여 저장!23
  for (let i = 3; i <= n; i++) {
    arr.push((arr[i - 1] + arr[i - 2]) % 1234567);
  }

  return arr[n];
}

console.log(reference(5));

// 시도 2 : 테스트케이스 13,14를 제외하고는 통과.
/*
function solution(n) {
  const memo = [0, 1];

  function aux(n) {
    if (memo[n] !== undefined) return memo[n];

    memo[n] = (aux(n - 1) + aux(n - 2)) % 1234567;
    return memo[n];
  }

  return aux(n);
}
console.log(solution(5));
*/

// 시도 1 : 테스트케이스 1 ~6 통과, 그 이후는 통과 X
/*
function solution(n) {
  const memo = [0, 1];

  function aux(n) {
    if (memo[n] !== undefined) return memo[n];

    memo[n] = aux(n - 1) + aux(n - 2);
    return memo[n];
  }

  return aux(n) % 1234567;
}

console.log(solution(5));
*/
