const notSelfNumber = []; //  셀프넘버가 아닌 수의 배열
const selfNumber = []; // 셀프넘버인 수의 배열

/* 수열 만들기 */
function d(n) {
  let sum = 0;
  for (let i = 0; i < String(n).length; i++) {
    //  n의 각 자리의 숫자 더하기
    sum += Number(String(n).charAt(i));
  }
  sum += n; // sum에 n 더하기

  if (sum < 10000) d(sum); // sum이 10000보다 작으면 d(sum) 반복 실행

  if (notSelfNumber.indexOf(sum) === -1) {
    // notSelfNumber 배열에 sum 값 넣기 (수열)
    notSelfNumber.push(sum);
  }
}

/* 1부터 10000까지 d(n) 반복실행 */
for (let i = 1; i < 10000; i++) {
  d(i);
}

/* notSelfNumber의 값 정렬하기 */
notSelfNumber.sort(compareNumbers);

function compareNumbers(a, b) {
  return a - b;
}

/* 1부터 10000까지의 수 중 selfNumber배열에 notSelfNumber에없는 수 담기 */
for (let k = 1; k <= 10000; k++) {
  if (notSelfNumber.indexOf(k) === -1) selfNumber.push(k);
}

/* 줄바꿈으로 출력 */
console.log(selfNumber.join("\n"));
