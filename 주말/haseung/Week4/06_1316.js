const inputs = [5, "ab", "aa", "aca", "ba", "bb"];

const N = Number(inputs.shift()); // 5가 나옴, inputs 배열에서 첫번째 요소만 제거
let counter = 0; // 결과값 0으로 초기화

function checkGroupWord(str) {
  let newArr = []; //newArr를 빈 배열로 초기화
  //str의 길이만큼 반복
  for (let i = 0; i < str.length; i++) {
    //str의 i번째 요소를 변수에 저장
    if (newArr.indexOf(str[i]) === -1) {
      //newArr에 str의 i번째 요소가 없다면
      newArr.push(str[i]); //newArr에 str의 i번째 요소를 추가 ['ab']
    } else {
      //newArr에 str의 i번째 요소가 있다면
      if (newArr[newArr.length - 1] !== str[i]) {
        //checker의 마지막 요소와 str의 i번째 요소가 같지 않다면
        return; //종료
      }
    }
  }

  counter++; //counter를 1 증가
}

for (let i = 0; i < N; i++) {
  //N번 반복
  checkGroupWord(inputs[i]); //checkGroupWord를 호출
}

// "ab", "aa", "aca", "ba", "bb"

console.log(counter); //counter를 출력
