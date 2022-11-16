function solution(s) {
  //실패한 코드
  // let stack = [s[0], s[1]];
  // let vsNum = 0;
  // let i = 2;
  //   const arrPop = () => {
  // i가 s길이 보다 크게 되면 다 안 없어진거니 리턴 0
  //     if (i > s.length) return 0;

  //     if (i > 0 && stack.length === 1) {
  // 혹시 스택의 길이가 1이고 시작하는 구간이 아니라면 vsNum은 늘어나면 안 되니까 push랑 i만 증가
  //       stack.push(s[i]);
  //       i++;
  //       return;
  //     }

  //     if (stack[vsNum] === stack[vsNum + 1]) {
  // 둘이 동일한 경우에는 s[i]가 있으면 stack에 s[i]넣어주기
  //       i > s.length ? null : stack.push(s[i]);
  // stack에서는 해당 index 제거하기
  //       stack = stack.filter((el, idx) => idx !== vsNum && idx !== vsNum + 1);
  // vsNum이 음수가 되면 안 되니까 삼항연산자
  //       vsNum = vsNum-- <= 0 ? 0 : vsNum--;
  //     } else {
  // 둘이 동일하지 않은 경우에는 push와 vsNum 증가만
  //       i >= s.length ? null : stack.push(s[i]);
  //       vsNum++;
  //     }
  // 어떤 경우에도 i는 증가
  //     i++;
  //   };

  //   while (true) {
  // i를 모두 소모한 arrPop 함수는 마지막으로 stack에 undefined를 넣더라
  // 그래서 그렇게 되면 1을 리턴
  //     if (stack[0] === undefined) return 1;
  //     const test = arrPop();
  // i가 먼저 다 소모된 경우는 0을 리턴하도록 함수를 작성했음
  // 그래서 이렇게 되면 0을 리턴
  //     if (test === 0) return 0;
  //   }
  //}

  // 로직 자체가 너무 복잡하게 꼬여버리고 다양한 케이스를 다루기에 적합하지 못한 느낌이 있었다.
  // 아니나 다를까 채점 돌리면 장렬하게 전사하는 작은 쓰레기 조각...

  // 결국 어디서 보고 긁어온 정답 - 10점 짜리
  let answer;
  let notPairStack = [];
  notPairStack.push(s[0]);
  for (let i = 1; i < s.length; i++) {
    //notPairStack의 마지막으로 들어온 요소와 s의 i번째 요소가 동일한지 확인
    if (notPairStack[notPairStack.length - 1] === s[i]) {
      //동일한 경우 마지막으로 들어온 요소 제거
      notPairStack.pop();
    } else {
      //아닌 경우 다음 요소 추가
      notPairStack.push(s[i]);
    }
  }
  answer = notPairStack.length === 0 ? 1 : 0;
  return answer;
}

//aaavv를 예시로 든다면
//처음에 a가 들어있는 상태
//1) a > a와 s[1]동일한가 > aa로 동일
//2) 비어있으니까 s[2]추가 > a추가
//3) a와 s[3]이 동일한가 > s[3]은 v임, v추가
//4) v와 s[4]는 동일한가 > 동일함, v제거
//결국 for를 다 돌아도 a가 남아있으니 0 리턴
