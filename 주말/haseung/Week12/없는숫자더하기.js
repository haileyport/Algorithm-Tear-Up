//0부터 9까지 숫자 중에 일부가 들어있는 정수 배열 numbers
//numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return

//1부터 9까지 전부 있다고 가정?
//아니면 9개로 구성된 배열을 만들기

// 항상 정렬된 배열이 들어온다고 보장을 못하기 때문에 정렬 수행

//	[5, 8, 4, 0, 6, 7, 9] -> [0,4,5,6,7,8,9]
// 	[1, 2, 3, 4, 6, 7, 8, 0] -> [0, 1, 2, 3, 4, 6, 7, 8]

// const log = console.log;
// 	const curry =
//   (f) =>
//   (a, ..._) =>
//     //인자가 2개 이상이라면 즉시 실행하고, 아니면 함수를 리턴한 후에 그 이후에 받은 인자를 합쳐서 다시 실행
//     _.length ? f(a, ..._) : (..._) => f(a, ..._);

// const reduce = curry((f, acc, iter) => {
//   if (!iter) {
//     iter = acc[Symbol.iterator]();
//     acc = iter.next().value;
//   } else {
//     iter = iter[Symbol.iterator]();
//   }
//   let cur;
//   while (!(cur = iter.next()).done) {
//     const a = cur.value;
//     acc = f(acc, a);
//   }

//   return acc;
// });

// const go = (...argument) => reduce((a, f) => f(a), argument);
// const add = (a,b)=>a+b;

function solution(numbers) {
  //0부터 9까지 구성된 배열 만들기
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  //0~9까지 모든 배열의 원소에 대하여 reduce
  const arrSum = arr.reduce((a, b) => a + b, 0); // 0+1+2+3+4+5+6+7+8+9

  //입력 배열에 대해서 reduce
  const numbersSum = numbers.reduce((a, b) => a + b, 0); //1+2+3+4+6+7+8+0

  return arrSum - numbersSum;

  //go

  // // const sortedArray = numbers.sort((a, b) => a - b); //굳이 정렬 안해도 될듯
  // const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // //numbers랑 arr랑 비교
  // //   const result = arr.filter((element, i) => element === sortedArray[i]);
  // //   console.log(result);
  // let arrSum = 0;
  // let numbersSum = 0;

  // //0~9까지 모든 배열의 원소에 대하여 reduce
  // // arrSum = arr.reduce((a, b) => a + b); // 0+1+2+3+4+5+6+7+8+9
  // arrSum = go(arr, reduce(add));

  // // numbersSum = numbers.reduce((a, b) => a + b); //1+2+3+4+6+7+8+0
  // numbersSum = reduce((a, b) => a + b, numbers);
  // numbersSum = go(numbers, reduce(add));

  // answer = arrSum - numbersSum;

  // return answer;

  //map으로 합 구했을 때
  // 테스트 1 〉	통과 (0.11ms, 33.6MB)
  // 테스트 2 〉	통과 (0.10ms, 33.4MB)
  // 테스트 3 〉	통과 (0.08ms, 33.4MB)
  // 테스트 4 〉	통과 (0.08ms, 33.6MB)
  // 테스트 5 〉	통과 (0.08ms, 33.4MB)
  // 테스트 6 〉	통과 (0.09ms, 33.3MB)
  // 테스트 7 〉	통과 (0.08ms, 33.5MB)
  // 테스트 8 〉	통과 (0.09ms, 33.4MB)
  // 테스트 9 〉	통과 (0.23ms, 33.5MB)

  //reduce 썼을 때(내장 메소드)
  //   테스트 1 〉	통과 (0.06ms, 33.5MB)
  //   테스트 2 〉	통과 (0.08ms, 33.6MB)
  //   테스트 3 〉	통과 (0.13ms, 33.6MB)
  //   테스트 4 〉	통과 (0.08ms, 33.6MB)
  //   테스트 5 〉	통과 (0.10ms, 33.6MB)
  //   테스트 6 〉	통과 (0.08ms, 33.5MB)
  //   테스트 7 〉	통과 (0.09ms, 33.6MB)
  //   테스트 8 〉	통과 (0.12ms, 33.5MB)
  //   테스트 9 〉	통과 (0.08ms, 33.6MB)

  //reduce만 썼을 때
  // 테스트 1 〉	통과 (0.06ms, 33.4MB)
  // 테스트 2 〉	통과 (0.07ms, 33.5MB)
  // 테스트 3 〉	통과 (0.12ms, 33.4MB)
  // 테스트 4 〉	통과 (0.07ms, 33.5MB)
  // 테스트 5 〉	통과 (0.10ms, 33.4MB)
  // 테스트 6 〉	통과 (0.10ms, 33.4MB)
  // 테스트 7 〉	통과 (0.08ms, 33.5MB)
  // 테스트 8 〉	통과 (0.06ms, 33.4MB)
  // 테스트 9 〉	통과 (0.07ms, 33.5MB)

  //위 3가지 경우는 정렬된 배열로 돌렸을 경우

  //이제부터 정렬 안하고 시작

  //직접 구현된 reduce를 썼을 때는 조금 더 오래걸림
  //   테스트 1 〉	통과 (0.15ms, 33.4MB)
  //   테스트 2 〉	통과 (0.10ms, 33.5MB)
  //   테스트 3 〉	통과 (0.15ms, 33.4MB)
  //   테스트 4 〉	통과 (0.12ms, 33.5MB)
  //   테스트 5 〉	통과 (0.11ms, 33.5MB)
  //   테스트 6 〉	통과 (0.15ms, 33.4MB)
  //   테스트 7 〉	통과 (0.13ms, 33.4MB)
  //   테스트 8 〉	통과 (0.14ms, 33.4MB)
  //   테스트 9 〉	통과 (0.09ms, 33.5MB)

  //내장 메소드, 무정렬 배열
  // 테스트 1 〉	통과 (0.06ms, 33.4MB)
  // 테스트 2 〉	통과 (0.08ms, 33.6MB)
  // 테스트 3 〉	통과 (0.08ms, 33.5MB)
  // 테스트 4 〉	통과 (0.10ms, 33.5MB)
  // 테스트 5 〉	통과 (0.06ms, 33.6MB)
  // 테스트 6 〉	통과 (0.07ms, 33.6MB)
  // 테스트 7 〉	통과 (0.05ms, 33.6MB)
  // 테스트 8 〉	통과 (0.08ms, 33.4MB)
  // 테스트 9 〉	통과 (0.06ms, 33.5MB)
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
