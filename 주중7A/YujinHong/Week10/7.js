function solution(clothes) {
  let obj = {};
  for (let i = 0; i < clothes.length; i++) {
    clothes[i][1] in obj ? obj[clothes[i][1]]++ : (obj[clothes[i][1]] = 1);
  }

  // 조합의 수 계산
  let result = 1;
  for (const key in obj) {
    result *= obj[key] + 1;
  }

  console.log(obj);
  return result - 1;
}
