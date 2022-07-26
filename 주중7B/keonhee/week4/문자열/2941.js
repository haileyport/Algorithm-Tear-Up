const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input[0];

function solution(str) {
  // 입력이 몇개의 croatian 알파벳으로 이루어져 있는지
  // 목록에 없는 알파벳은 1글자로 친다.
  // replace 함수 이용해보기

  let count = 0;

  const croatian = { č: 'c=', ć: 'c-', dž: 'dz=', đ: 'd-', lj: 'lj', nj: 'nj', š: 's=', ž: 'z=' };

  for (let key in croatian) {
    const alphabet = croatian[key];

    // alphabet 을 ' ' (공백으로 대체)
    // '' 빈문자열로 하면 nljj의 경우에 lj 가 사라지고 nj 도 한번더 사라짐
    // replacing 이 이루어 지면 count ++
    // replace 를 쓰면 'c=c=' 일 경우에는 한번만 처리

    str = str.replaceAll(alphabet, () => {
      count += 1;
      return ' ';
    });
  }

  // croatian alphabet을 제외한 문자열 에서 공백을 없애준다.
  str = str.replaceAll(/\s/g, '');

  // croatian alphabet 의 개수 count + 나머지 alphabet 의 개수
  console.log(count + str.length);
}

solution(input);
