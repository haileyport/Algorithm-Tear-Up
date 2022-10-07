
function solution(n, lost, reserve) {

  // 학생들이 가지고 있는 체육복 수를 모두 1로 세팅
  const clothes = Array(n).fill(1);

  // 체육복을 도난당한 학생들의 체육복 수를 0으로
  lost.map((lost) => { clothes[lost - 1] = 0 });

  // 여벌을 가지고 있는 학생들의 체육복 수 1 증가
  reserve.map(reserve => { clothes[reserve - 1] += 1 });

  for (let i = 0; i < n; i++) {
    // 체육복이 0개인 학생이 앞사람한테 받아왔을 때 
    if (clothes[i] === 0 && clothes[i - 1] === 2) {
      clothes[i] = 1;
      clothes[i - 1] = 1;
    }
    // 체육복이 0개인 학생이 뒷사람한테 받아왔을 때 
    else if (clothes[i] === 0 && clothes[i + 1] === 2) {
      clothes[i] = 1;
      clothes[i + 1] = 1;
    }
  }

  // 체육복이 한개 이상인 학생들의 수
  return clothes.filter(c => c > 0).length;
}