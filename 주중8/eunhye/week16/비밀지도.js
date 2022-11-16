function solution(n, arr1, arr2) {
  arr1 = arr1.map((el) => el.toString(2).padStart(n, 0));
  arr2 = arr2.map((el) => el.toString(2).padStart(n, 0));
  // padStart(): 첫 번째 인자로 자릿수를 지정하고, 두 번째 인자로 추가할 문자열을 입력한다
  // 만약에 첫 번째 인자보다 긴 문자열일 경우 아무 일도 일어나지 않는다
  // "111".padStart(6, '0') >> "000111"
  const answer = [];

  for (i = 0; i < arr1.length; i++) {
    let word = '';
    for (j = 0; j < arr1[i].length; j++) {
      if (arr1[i][j] === '1' || arr2[i][j] === '1') {
        word += '#';
      } else {
        word += ' ';
      }
    }
    answer.push(word);
  }

  return answer;
}
