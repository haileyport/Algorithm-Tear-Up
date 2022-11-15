/**
 * 통과 여부 : X
 * 시간 : 20분
 * 점수 : ?
 * 테스트케이스는 통과했으나 효율성에서 시간초과 발생.. 원인을 잘 모르겠습니다.
 */

// 시간초과가 계속 나서 결국 다른 분의 풀이를 참고했습니다. 근데 다른 분의 풀이도 시간 초과가 나더라고요..?
function solution(str) {
  let count = 0;

  for (let l of str) {
    count += l === '(' ? 1 : -1;
    if (count < 0) return false;
  }
  return count === 0 ? true : false;
}

// 2번째 풀이 : 테스트는 통과했는데 역시 시간초과... 반복문을 도는거 자체가 문제였나?
function solution(str) {
  let count = 0;

  for (let l of str) {
    if (count < 0) return false;
    if (l === '(') {
      count++;
    } else if (l === ')') {
      count--;
    }
  }
  return count === 0 ? true : false;
}

const str = '(())(';
console.log(solution(str));

// 기존 풀이 : 테스트는 통과했으나 효율성에서 시간초과 발생
// function solution(str) {
//   const stack = [];

//   for (let l of str) {
//     if (l === '(') {
//       stack.push(l);
//     } else if (l === ')') {
//       if (stack.length === 0) return false;
//       stack.pop();
//     }
//   }
//   if (stack.length === 0) return true;
//   else return false;
// }

// const str = '(())()';
// console.log(solution(str));
