function solution(n, arr1, arr2) {
  //먼저 각 배열 받은 것을 이진수로 변환
  //이진배열로 변환
  //변환한 수의 길이가 n보다 작으면 앞에 0 붙이기
  //map으로 변환<?
  //#이 벽, 공백이 빈 땅 " "

  //이진배열로 변환
  //변환한 수의 길이가 n보다 작으면 앞에 0 붙이기
  let binaryArr1 = [...arr1]
    .map((el) => el.toString(2))
    .map((el) => (el.length < n ? "0".repeat(n - el.length) + el : el))
    .map((el) => el.split(""));
  let binaryArr2 = [...arr2]
    .map((el) => el.toString(2))
    .map((el) => (el.length < n ? "0".repeat(n - el.length) + el : el))
    .map((el) => el.split(""));

  let wallArr1 = filterWall(binaryArr1);
  let wallArr2 = filterWall(binaryArr2);

  let wall3 = [];
  let wall;
  for (let i = 0; i < n; i++) {
    wall = wallArr1[i].concat(wallArr2[i]);
    wall3.push(wall);
  }

  let answer = findIt(n, wall3);
  console.log(answer);
  return answer;
}

function filterWall(arr) {
  let result = [];
  let newN;
  for (let n of arr) {
    newN = n.map((el) => (el === "1" ? (el = "#") : (el = " ")));
    result.push(newN);
  }
  return result;
}

function findIt(n, arr3) {
  if (!Array.isArray(arr3[0])) {
    return arr3;
  }
  let el = "";
  for (let i = 0; i < n; i++) {
    if (arr3[0][i] === " " && arr3[0][i + n] === " ") {
      el += " ";
    } else {
      el += "#";
    }
  }
  arr3.push(el);
  arr3.shift();
  return findIt(n, arr3);
}
// 정확성  테스트
// 테스트 1 〉	통과 (3.46ms, 33.6MB)
// 테스트 2 〉	통과 (3.89ms, 33.6MB)
// 테스트 3 〉	통과 (3.28ms, 33.5MB)
// 테스트 4 〉	통과 (3.51ms, 33.7MB)
// 테스트 5 〉	통과 (3.58ms, 33.6MB)
// 테스트 6 〉	통과 (3.75ms, 33.5MB)
// 테스트 7 〉	통과 (3.27ms, 33.6MB)
// 테스트 8 〉	통과 (3.22ms, 33.5MB)
