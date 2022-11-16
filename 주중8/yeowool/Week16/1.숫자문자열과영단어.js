// [PGS] 숫자 문자열과 영단어 / leve1
// 난이도 :  level 1
// 풀이시간 : 30분
// 점수 : 실패

/*
문제
네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

1478 → "one4seveneight"
234567 → "23four5six7"
10203 → "1zerotwozero3"
이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.

숫자	영단어
0	zero
1	one
2	two
3	three
4	four
5	five
6	six
7	seven
8	eight
9	nine
제한사항
1 ≤ s의 길이 ≤ 50
s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.
입출력 예
s	result
"one4seveneight"	1478
"23four5six7"	234567
"2three45sixseven"	234567
"123"	123
입출력 예 설명
입출력 예 #1

문제 예시와 같습니다.
입출력 예 #2

문제 예시와 같습니다.
입출력 예 #3

"three"는 3, "six"는 6, "seven"은 7에 대응되기 때문에 정답은 입출력 예 #2와 같은 234567이 됩니다.
입출력 예 #2와 #3과 같이 같은 정답을 가리키는 문자열이 여러 가지가 나올 수 있습니다.
입출력 예 #4

s에는 영단어로 바뀐 부분이 없습니다.
*/

/*
< 의사코드 >
먼저 if문으로 숫자를 가려내어 result에 넣고 숫자가 아닐 경우 영문자의 앞 두글자가지만 체크하여
어떤 순자인지 조건을 걸어주려고 했다. 하지만 if문이 너무 많아져서 대신 값을 넣어주는 replace를 
사용하는 것이 좋을 것 같다는 생각을 했다.


*/

function solution(s) {
  let result = [];

  if (s.legnth === 0) {
    return result;
  }
  for (let i = 0; i < s.length; i++) {
    if (typeof s[i] === "number") {
      result.push(s[i]);
      solution(s.silce(i, s.length));
    }
  }
}
// 실패!
// 다시 replace로 풀이 시작

function solution(s) {
  s = s
    .replace("zero", 0)
    .replace("one", 1)
    .replace("two", 2)
    .replace("three", 3)
    .replace("four", 4)
    .replace("five", 5)
    .replace("six", 6)
    .replace("seven", 7)
    .replace("eight", 8)
    .replace("nine", 9);
  return Number(s);
}

/*
테스트 1 〉	통과 (0.04ms, 33.4MB)
테스트 2 〉	통과 (0.04ms, 33.4MB)
테스트 3 〉	통과 (0.07ms, 33.4MB)
테스트 4 〉	통과 (0.04ms, 33.4MB)
테스트 5 〉	실패 (0.04ms, 33.4MB)
테스트 6 〉	통과 (0.04ms, 33.4MB)
테스트 7 〉	실패 (0.04ms, 33.4MB)
테스트 8 〉	실패 (0.04ms, 33.3MB)
테스트 9 〉	통과 (0.04ms, 33.4MB)
테스트 10 〉	통과 (0.07ms, 33.5MB)

세 문제가 통과를 하지 못했다! 왜지???
테스트는 다 성공하는데....
정렬을 안해줘서 그런것인가..?

*/

function solution(s) {
  s = s
    .replace("zero", 0)
    .replace("one", 1)
    .replace("two", 2)
    .replace("three", 3)
    .replace("four", 4)
    .replace("five", 5)
    .replace("six", 6)
    .replace("seven", 7)
    .replace("eight", 8)
    .replace("nine", 9);
  console.log(s);
  // s.sort()
  return Number(s);
}
/*
테스트 1
입력값 〉	"one4seveneight"
기댓값 〉	1478
실행 결과 〉	테스트를 통과하였습니다.
출력 〉	1478
테스트 2
입력값 〉	"23four5six7"
기댓값 〉	234567
실행 결과 〉	테스트를 통과하였습니다.
출력 〉	234567
테스트 3
입력값 〉	"2three45sixseven"
기댓값 〉	234567
실행 결과 〉	테스트를 통과하였습니다.
출력 〉	234567
테스트 4
입력값 〉	"123"
기댓값 〉	123
실행 결과 〉	테스트를 통과하였습니다.
출력 〉	123

콘솔도 잘 나오는데....

정렬문제인가 싶어
    s.sort((a,b)=> a-b)
이렇게 솔트를 해 봤지만 엄청난 오류가 났다.
ㅇ<-<
*/
