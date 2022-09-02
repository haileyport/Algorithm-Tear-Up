function solution(s) {
  var answer = 0;
  let stack = [], compress = [], totalCompressed = [];
  for (let i = 1; i <= Math.ceil(s.length / 2); i++) {
    stack = [];
    compress = [];
    // i개씩 잘라서 배열에 넣기
    for (let j = 0; j < s.length; j += i) stack.push(s.slice(j, j + i));

    let count = 1;
    compress.push(stack[0]);

    // stack 돌면서 압축 작업
    for (let i = 1; i < stack.length; i++) {
      //바로 직전과 다르면 compress 배열에 현재 값 추가
      if (stack[i] !== compress[compress.length - 1]) {
        compress.push(stack[i]);
        count = 1;
      }
      //바로 직전과 같으면 앞에 숫자 추가
      else {
        count++;
        // 해당 인덱스가 숫자라면 그 숫자만 바꿔주기
        if (typeof (compress[compress.length - 2]) === 'number') compress[compress.length - 2] = count;
        else compress.splice(compress.length - 1, 0, count); //추가할 인덱스, 삭제할 인덱스, 추가할 값
      }
      last = stack[i];
    }
    // compress = [2, 'a', 2, 'b', 'a', 2, 'c'];
    let temp = compress.join(''); // temp = '2a2ba2c'
    totalCompressed.push(temp);

  }
  let answerLength = totalCompressed.map(el => el.length);
  answer = Math.min(...answerLength);

  return answer;
}