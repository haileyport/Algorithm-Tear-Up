// [PGS] 숫자 짝꿍 / leve1
// 난이도 :  level 1
// 풀이시간 : 풀이 실패
// 점수 :

/*
문제
두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 
만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다
(단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다). 
X, Y의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다. X, Y의 짝꿍이 0으로만 구성되어 있다면, 
짝꿍은 0입니다.

예를 들어, X = 3403이고 Y = 13203이라면, X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 3, 0, 3으로 만들 수 있는 가장 큰 정수인 330입니다. 다른 예시로 X = 5525이고 Y = 1255이면 X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 2, 5, 5로 만들 수 있는 가장 큰 정수인 552입니다(X에는 5가 3개, Y에는 5가 2개 나타나므로 남는 5 한 개는 짝 지을 수 없습니다.)
두 정수 X, Y가 주어졌을 때, X, Y의 짝꿍을 return하는 solution 함수를 완성해주세요.

제한사항
3 ≤ X, Y의 길이(자릿수) ≤ 3,000,000입니다.
X, Y는 0으로 시작하지 않습니다.
X, Y의 짝꿍은 상당히 큰 정수일 수 있으므로, 문자열로 반환합니다.

입출력 예
X	Y	result
"100"	"2345"	"-1"
"100"	"203045"	"0"
"100"	"123450"	"10"
"12321"	"42531"	"321"
"5525"	"1255"	"552"

입출력 예 설명
입출력 예 #1

X, Y의 짝꿍은 존재하지 않습니다. 따라서 "-1"을 return합니다.
입출력 예 #2

X, Y의 공통된 숫자는 0으로만 구성되어 있기 때문에, 두 수의 짝꿍은 정수 0입니다. 따라서 "0"을 return합니다.
입출력 예 #3

X, Y의 짝꿍은 10이므로, "10"을 return합니다.
입출력 예 #4

X, Y의 짝꿍은 321입니다. 따라서 "321"을 return합니다.
입출력 예 #5

지문에 설명된 예시와 같습니다.
*/

/*
< 의사코드 >
while문을 사용하여 배열 X의 길이가 0이 될 때 까지 Y를 검사하여 같은 숫자만 새로운배열에 넣어서 내림차순으로 sort해서 join

1. 같은숫자 넣을 배열 선언
2. while문안에 for문과 if문으로 배열에서 같은숫자 체크하여 새로운 배열에 push
3. 

*/

function solution(X, Y) {
  let sameNum = [];

  while (X.length === 0) {
    for (let i = 0; i < X.length; i++) {
      for (let j = 0; j < Y.length; j++) {
        if (X[i] === Y[j]) {
          sameNum.push(X[i]);
          X.replce(X[i], "");
        }
      }
    }
  }
  sameNum.sort((a, b) => b - a).join();

  return sameNum;
}
/*
테스트 1
입력값 〉	"100", "2345"
기댓값 〉	"-1"
실행 결과 〉	실행한 결괏값 []이 기댓값 "-1"과 다릅니다.
테스트 2
입력값 〉	"100", "203045"
기댓값 〉	"0"
실행 결과 〉	실행한 결괏값 []이 기댓값 "0"과 다릅니다.
테스트 3
입력값 〉	"100", "123450"
기댓값 〉	"10"
실행 결과 〉	실행한 결괏값 []이 기댓값 "10"과 다릅니다.
테스트 4
입력값 〉	"12321", "42531"
기댓값 〉	"321"
실행 결과 〉	실행한 결괏값 []이 기댓값 "321"과 다릅니다.
테스트 5
입력값 〉	"5525", "1255"
기댓값 〉	"552"
실행 결과 〉	실행한 결괏값 []이 기댓값 "552"과 다릅니다.

음.. 왜인지 모르겠으나 배열에 아무것도 들어오지 않는다
재귀로 한번 도전 해 본다
*/

function solution(X, Y) {
  let sameNum = [];
  if (X.length === 0) {
    return sameNum;
  }

  for (let i = 0; i < X.length; i++) {
    for (let j = 0; j < Y.length; j++) {
      if (X[i] === Y[j]) {
        sameNum.push(X[i]);
        let x = X.replace(X[i], "");
        solution(x, Y);
      }
    }

    if (sameNum.length === 0) {
      sameNum.push(-1);
    } else {
      sameNum.sort((a, b) => b - a);
    }
  }
}

/*
래퍼런스 에러..
push가 잘못됐다는데 ..웨..?

다른분의 풀이 참고하기

*/

function solution(X, Y) {
  var answer = "";

  const min_len = X.length < Y.length ? ["X", X.length] : ["Y", Y.length];

  for (let i = 0; i < min_len[1]; i++) {
    if (min_len[0] === "X") {
      if (Y.includes(X[i])) {
        const idx = Y.indexOf(X[i]);
        Y = Y.substr(0, idx) + Y.substr(idx + 1, Y.length);
        answer += X[i];
      }
    } else {
      if (X.includes(Y[i])) {
        const idx = X.indexOf(Y[i]);
        X = X.substr(0, idx) + X.substr(idx + 1, X.length);
        answer += Y[i];
      }
    }
  }

  if (answer === "") {
    return "-1";
  } else if (answer.match(/[^0]/g) === null) {
    return "0";
  } else {
    return [...answer].sort().reverse().join("");
  }
}

/*
테스트 1 〉	통과 (0.16ms, 33.5MB)
테스트 2 〉	통과 (0.17ms, 33.5MB)
테스트 3 〉	통과 (0.14ms, 33.6MB)
테스트 4 〉	통과 (0.14ms, 33.5MB)
테스트 5 〉	통과 (0.14ms, 33.5MB)
테스트 6 〉	통과 (0.66ms, 33.9MB)
테스트 7 〉	통과 (0.32ms, 33.6MB)
테스트 8 〉	통과 (0.63ms, 33.8MB)
테스트 9 〉	통과 (0.39ms, 33.6MB)
테스트 10 〉	통과 (0.53ms, 33.7MB)
테스트 11 〉	실패 (시간 초과)
테스트 12 〉	실패 (시간 초과)
테스트 13 〉	실패 (시간 초과)
테스트 14 〉	실패 (시간 초과)
테스트 15 〉	실패 (시간 초과)
테스트 16 〉	통과 (0.10ms, 32.8MB)
테스트 17 〉	통과 (0.09ms, 32.9MB)
테스트 18 〉	통과 (0.11ms, 33MB)
테스트 19 〉	통과 (0.07ms, 32.9MB)

<의사코드>
1. 0부터 9까지 숫자의 갯수를 파악해서 최소갯수만큼 answer에 추가
2. answer에 아무 값이 없다면 -1return
3. answer에 0만 있다면 0 return 
4. 나머지 숫자가 있다면 내림차순으로 정렬
*/

function solution(X, Y) {
  var answer = "";

  X = [...X];
  Y = [...Y];
  console.log(X, Y);

  for (let i = 0; i < 10; i++) {
    const X_cnt = X.filter((item) => +item === i).length;
    const Y_cnt = Y.filter((item) => +item === i).length;
    answer += i.toString().repeat(Math.min(X_cnt, Y_cnt));
  }

  if (answer === "") {
    return "-1";
  } else if (answer.match(/[^0]/g) === null) {
    return "0";
  } else {
    return [...answer].sort().reverse().join("");
  }
}

/*
테스트 1 〉	통과 (3.38ms, 33.5MB)
테스트 2 〉	통과 (3.50ms, 33.5MB)
테스트 3 〉	통과 (3.66ms, 33.5MB)
테스트 4 〉	통과 (3.43ms, 33.4MB)
테스트 5 〉	통과 (3.54ms, 33.6MB)
테스트 6 〉	통과 (4.44ms, 33.7MB)
테스트 7 〉	통과 (4.43ms, 33.6MB)
테스트 8 〉	통과 (4.62ms, 33.6MB)
테스트 9 〉	통과 (4.55ms, 33.6MB)
테스트 10 〉	통과 (4.22ms, 33.6MB)
테스트 11 〉	통과 (1593.33ms, 215MB)
테스트 12 〉	통과 (1590.35ms, 215MB)
테스트 13 〉	통과 (1642.99ms, 215MB)
테스트 14 〉	통과 (1603.98ms, 215MB)
테스트 15 〉	통과 (1598.72ms, 215MB)
테스트 16 〉	통과 (3.36ms, 33.6MB)
테스트 17 〉	통과 (3.30ms, 33.5MB)
테스트 18 〉	통과 (3.34ms, 33.4MB)
테스트 19 〉	통과 (3.50ms, 33.5MB)
*/
