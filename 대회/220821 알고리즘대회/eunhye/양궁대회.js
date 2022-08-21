function solution(n, info) {
  var answer = [];

  //화살 수 n, 어피치가 맞힌 과녁 점수(10-i)info(내림차순)
  //k점을 어피치가 a발, 라이언이 b발 맞힌 경우 더 많이 맞춘 사람이 k점을 가져감 >> 여러번 k점을 맞춰도 k점
  //점수가 동일한 경우 어피치가 점수를 가져감
  //a=b=0인 경우는 k점을 아무도 안 가져감

  //최종 점수를 계산하여 더 높은 사람(동점인 경우 어피치)이 우승
  //라이언이 가장 큰 점수 차이로 화살을 쏠 때, 어디에 맞춰야 하는지 구해라
  //경우가 여러개인 경우, 가장 낮은점수를 더 많이 맞춘 수를 구해라
  //우승할 수 없는 경우 [-1] 리턴

  let apeach = 0;
  let ryan = 0;
  let win = {};

  //현재 어피치의 점수
  for (i = 0; i < info.length; i++) {
    if (info[i] !== 0) apeach += 10 - i;
  }

  //어피치보다 높은 점수로 이기는 경우
  //10부터 쐈으면 그다음에는 9부터 쏘는 방식으로 차차차.

  for (k = 0; k <= 11; k++) {
    let apeachChange = apeach;
    let ryanShoot = n;
    const arr = []; //쏘는 정보 들어있음
    const score = [];
    for (j = 0; j < k; j++) {
      score.push(0);
      arr.push(0);
    }
    let i = k;
    while (i < info.length) {
      const arrow = info[i];
      if (ryanShoot - (arrow + 1) >= 0) {
        //쏠 수 있다고 무조건 쏘는게 아니라 다음거 쏘는게 유리할 수도 있다는 걸 로직에 적용하기
        //ex. 어피치 점수 스틸 등
        console.log("ryan got a chance: " + ryanShoot + " " + (arrow + 1));
        console.log(10 - i);
        ryanShoot -= arrow + 1;
        score.push(10 - i);
        arr.push(arrow + 1);
        if (arrow !== 0) {
          apeachChange -= 10 - i;
        }
      } else {
        score.push(0);
        arr.push(0);
      }
      i++;
    }

    console.log("final arr: " + arr);
    ryan = score.reduce((acc, cur) => {
      return acc + cur;
    });

    if (apeachChange < ryan) {
      win[ryan - apeachChange] = arr;
    }
  }

  const key = Object.keys(win);
  console.log(key);

  if (key.length === 0) return [-1];

  answer = win[Math.max(...key)];

  return answer;
}

//정확성 42.9/100 으로 실패...
