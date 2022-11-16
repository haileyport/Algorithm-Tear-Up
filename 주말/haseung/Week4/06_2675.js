// 문제
// 문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. S에는 QR Code "alphanumeric" 문자만 들어있다.

// QR Code "alphanumeric" 문자는 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\$%*+-./: 이다.

// 입력
// 첫째 줄에 테스트 케이스의 개수 T(1 ≤ T ≤ 1,000)가 주어진다. 각 테스트 케이스는 반복 횟수 R(1 ≤ R ≤ 8), 문자열 S가 공백으로 구분되어 주어진다. S의 길이는 적어도 1이며, 20글자를 넘지 않는다.

// 출력
// 각 테스트 케이스에 대해 P를 출력한다.

// 예제 입력 1
// 2
// 3 ABC
// 5 /HTP
// 예제 출력 1
// AAABBBCCC
// /////HHHHHTTTTTPPPP

// const testCase = require("fs").readFileSync(0, "utf-8").toString().split("\n");
const testCase = ["2", "3 ABC", "5 /HTP"];

const first = testCase.shift(); //shift: 첫번째 요소 제거 후 제거된 요소 반환

for (let i = 0; i < first; i++) {
  let answer = "";

  const [second, str] = testCase[i].split(" ");
  //첫번째: 3, 두번째:5 second
  //첫번째: ABC, 두번째:/HTP str
  // console.log(second, str); //3 ABC , 5 /HTP

  for (let j = 0; j < str.length; j++) {
    answer += str[j].repeat(second);
    //ABC의 0번째인 A를 3번 반복, 1번째인 B를 3번 반복..
    ///HTP의 0번째인 /를 5번 반복
  }

  console.log(answer);
}
