function solution(s) {
  let answer = 0;
  let compressedArr = [];

  // i개 단위로 압축한다.
  for (let i = 1; i <= s.length; i++) {
    const num = i;
    let count = 1;
    let compressedS = "";

    // 압축한다.
    for (let j = 0; j < s.length; j += num) {
      const currentS = s.slice(j, j + num);
      const nextS = s.slice(j + num, j + num + num);

      if (currentS === nextS) {
        count++;
      } else {
        if (count === 1) compressedS += currentS;
        else compressedS += count + currentS;

        count = 1;
      }
    }

    compressedArr.push(compressedS.length);
  }

  answer = Math.min(...compressedArr);

  return answer;
}
