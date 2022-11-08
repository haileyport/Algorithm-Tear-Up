function solution(numbers) {
  let arr = [];
  let sortNum = numbers.sort((a, b) => a - b);

  function plusAll(num, result) {
    if (num.length === 1) {
      return result;
    }
    for (let n = 1; n < num.length; n++) {
      result.push(num[0] + num[n]);
    }
    num.shift();
    plusAll(num, result);
  }

  plusAll(sortNum, arr);
  arr = arr
    .sort((a, b) => a - b)
    .filter((el, idx) => {
      return arr.indexOf(el) === idx;
    });
  console.log(arr);
  return arr;
}

solution([2, 1, 3, 4, 1]);

//재귀함수?
//이중반복?
//3점 20분
// 테스트 1 〉	통과 (2.87ms, 33.6MB)
// 테스트 2 〉	통과 (3.12ms, 33.6MB)
// 테스트 3 〉	통과 (2.89ms, 33.5MB)
// 테스트 4 〉	통과 (3.39ms, 33.5MB)
// 테스트 5 〉	통과 (3.32ms, 33.7MB)
// 테스트 6 〉	통과 (3.60ms, 33.6MB)
// 테스트 7 〉	통과 (184.89ms, 35.4MB)
// 테스트 8 〉	통과 (16.10ms, 33.7MB)
// 테스트 9 〉	통과 (3.71ms, 33.8MB)
