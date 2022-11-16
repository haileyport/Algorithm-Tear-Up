function solution(n) {
    var answer = 0;
    let stringN = String(n).split('').map(Number)
    stringN.sort(function(a, b)  {
        return b-a;
    });
    answer = Number(stringN.join(''))
    return answer;
  }

  //2점
  //15분 내 