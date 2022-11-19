// [PGS] 옹알이 (2) / leve1
// 난이도 :  level 1
// 풀이시간 : 다른풀이참고
// 점수 : 8

/*
문제
머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다. 
조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고 
연속해서 같은 발음을 하는 것을 어려워합니다. 
문자열 배열 babbling이 매개변수로 주어질 때, 
머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ babbling의 길이 ≤ 100
1 ≤ babbling[i]의 길이 ≤ 30
문자열은 알파벳 소문자로만 이루어져 있습니다.
입출력 예
babbling	result
["aya", "yee", "u", "maa"]	1
["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]	2
입출력 예 설명
입출력 예 #1

["aya", "yee", "u", "maa"]에서 발음할 수 있는 것은 "aya"뿐입니다. 따라서 1을 return합니다.
입출력 예 #2

["ayaye", "uuuma", "yeye", "yemawoo", "ayaayaa"]에서 발음할 수 있는 것은 "aya" + "ye" = "ayaye", "ye" + "ma" + "woo" = "yemawoo"로 2개입니다. "yeye"는 같은 발음이 연속되므로 발음할 수 없습니다. 따라서 2를 return합니다.
유의사항
네 가지를 붙여 만들 수 있는 발음 이외에는 어떤 발음도 할 수 없는 것으로 규정합니다. 예를 들어 "woowo"는 "woo"는 발음할 수 있지만 "wo"를 발음할 수 없기 때문에 할 수 없는 발음입니다.
*/

/*
< 의사코드 >
 발음가능한 단어를 스택에 쌓아서 길이를 리턴하면 되지 않을까
 발음 가능한 단어 배열로 만들어서 입력된 배열과 비교하기

1. 발음 가능한 배열 선언
2. 조건에 맞는 답 담을 배열 선언
3. ..?

babbling를 하나씩 보면서 replace를 해 주는 것은..?
그럼 어떻게 하지 그것을 아 포함하는지 확인 해 보자

확인하는 것으로 끝나면 안될듯...


*/

function solution(babbling) {
  let arr = ["aya", "ye", "woo", "ma"];
  let result = [];

  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (babbling[i] === arr[j]) {
        result.push(arr[j]);
      }
    }
  }
  return result.length;
}

/*
  테스트 1
입력값 〉	["aya", "yee", "u"]
기댓값 〉	1
실행 결과 〉	테스트를 통과하였습니다.
테스트 2
입력값 〉	["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]
기댓값 〉	2
실행 결과 〉	실행한 결괏값 0이 기댓값 2과 다릅니다.

이제 이어진거.. 체크하기
*/

function solution(babbling) {
  let arr = ["aya", "ye", "woo", "ma"];
  let result = [];

  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (babbling[i].includes(arr[j])) {
        result.push(arr[j]);
      }
    }
  }
  return result.length;
}

/*

테스트 1
입력값 〉	["aya", "yee", "u"]
기댓값 〉	1
실행 결과 〉	실행한 결괏값 2이 기댓값 1과 다릅니다.
테스트 2
입력값 〉	["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]
기댓값 〉	2
실행 결과 〉	실행한 결괏값 7이 기댓값 2과 다릅니다.

차라리 확인해서 count하고 replace해 주는 것은?
*/

function solution(babbling) {
  let arr = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (babbling[i].includes(arr[j])) {
        babbling[i].replace(arr[j], "");
        console.log(babbling[i]);
        console.log(arr[j]);
      }
    }
  }
  // console.log(babbling)
  return count;
}

function solution(babbling) {
  let arr = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (babbling[i].includes(arr[j])) {
        count += 1;
        let a = babbling[i].replace(arr[j], "");
      }
    }
  }
  return count;
}

// 안되는 발음을 배열에 넣어 줘 보자..

function solution(babbling) {
  let arr = ["aya", "ye", "woo", "ma"];
  let arr2 = ["ayaaya", "yee", "woowoo", "mama"];
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (babbling[i].includes(arr[j]) && !babbling[i].includes(arr2[j])) {
        count += 1;
        babbling[i].replace(arr[j], "");
      }
    }
  }
  return count;
}

/*
스피크 배열
비슷..? 인지 모르겠지만
비슷한 구조 인 것 같은 풀이를 가져왔다!

연속되는 경우를 배열로 선언하여 while문에서 걸러내는 방법
그리고 가능한 발음을 숫자로 바꾸어 공백으로 변환 후에
count를 올려주는 방향으로 
*/

function solution(babbling) {
  // 해당 풀이는 StarBlitz님의 풀이를 해석하였음을 미리 밝힙니다.
  let count = 0;
  // 연속되는 경우
  let dup = ["ayaaya", "yeye", "woowoo", "mama"];
  while (babbling.length) {
    let b = babbling.pop();
    // 연속되는 발음은 패스
    if (dup.some((v) => b.includes(v))) continue;
    // 가능한 발음을 모두 숫자로 바꾸어
    b = b
      .replaceAll("aya", "1")
      .replaceAll("ye", "2")
      .replaceAll("woo", "3")
      .replaceAll("ma", "4");
    // 숫자는 공백으로 변환
    b = b.replace(/[1234]/g, "");
    // 모두 가능한 발음의 경우 count++
    if (b.length === 0) count++;
  }

  return count;
}

/*
8점이나 얻었다..!
테스트 1 〉	통과 (0.19ms, 33.5MB)
테스트 2 〉	통과 (0.23ms, 33.5MB)
테스트 3 〉	통과 (0.15ms, 33.5MB)
테스트 4 〉	통과 (0.15ms, 33.5MB)
테스트 5 〉	통과 (0.16ms, 33.4MB)
테스트 6 〉	통과 (0.15ms, 33.4MB)
테스트 7 〉	통과 (0.23ms, 33.4MB)
테스트 8 〉	통과 (0.14ms, 33.4MB)
테스트 9 〉	통과 (0.29ms, 33.5MB)
테스트 10 〉	통과 (0.22ms, 33.5MB)
테스트 11 〉	통과 (0.16ms, 33.5MB)
테스트 12 〉	통과 (0.30ms, 33.5MB)
테스트 13 〉	통과 (0.62ms, 33.6MB)
테스트 14 〉	통과 (0.37ms, 33.5MB)
테스트 15 〉	통과 (0.31ms, 33.6MB)
테스트 16 〉	통과 (0.38ms, 33.5MB)
테스트 17 〉	통과 (0.34ms, 33.5MB)
테스트 18 〉	통과 (0.24ms, 33.5MB)
테스트 19 〉	통과 (0.26ms, 33.5MB)
테스트 20 〉	통과 (0.30ms, 33.5MB)
*/
