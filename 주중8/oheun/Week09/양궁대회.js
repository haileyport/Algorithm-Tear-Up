/*
통과 여부 :
시간 :
점수 :

문제 : 
    - n발씩 돌아가면서 쏨(어-> 라)
    - 점수 계산
    - k점을 더 많은 화살 맞춘 사람이 가져감
    - a = b면 어피치가 가져 감
    - 많이 맞춰도 k점만 가져감.
    - 아무도 못 맞추면 아무도 못 가져감.
    - 이미 어피치는 화살 쐈고 라이언이 젤 점수 높게 이기려면 어떤 점수를 뺏어올까

input
    - 화살 개수 n
    - 점수 배열 info
    - 10~0 중 화살 개수 return
    - 지거나 비기면 [-1]
    - 이길거면 가장 낮은 점수 맞춘 경우

재귀를 이용하자!!!


*/

/*
- 화살의 수 n은 달라질 수 있다.
- 재귀는 어떻게 돌까? 
    라이언이 쏘는 화살 숫자가 어피치가 쏜 점수의 수보다 커질 때까지 돈다.
    만약에 라이언이 쏠 수 있는 숫자가 어피치가 그 점수에 쏜 화살 수보다 적으면 다음 수를 본다

- 재귀는 언제 멈출까?
    화살을 다 쏘면 멈춘다

- 출력하는 배열은 어떻게 결정할까?
    어피치의 점수와 가장 큰 점수 차가 나야 한다.
    무조건 지거나 비기면 [-1]을 출력해야 한다.
    배열들을 만들어놓고 점수합을 비교해서 출력할까? 시간이 너무 오래 걸리지 않을까?


*/


/*
은비님 올리신 코드 분석하기!
저는 코드 보면서 재귀함수를 3가지로 나눠서 봤어여
1) 화살 수가 0보다 작을 때
-  dfs(i + 1, n - board[i], board)로 재귀함수를 호출하기 때문에 remain이 0보다 작은 상황은 어피치 화살 수보다 많이 쏘려고 1개 더 쏘면 라이언 화살 수가 부족하기 때문에 기각되는 경우

2) 화살 수가 0일 때
- 재귀함수를 호출하면서 어피치보다 1개 많은 경우를 반복하다가 화살 수를 다 썼을 때
- 어피치와 라이언의 화살 수를 비교하며 큰 사람꺼를 점수로 추가한다
- 지금까지 구했던 큰 수와 비교해보며 answer로 할당한다
- 일단 큰 수 갱신했으니 return

3) 화살 수가 아직 남았을 때
- 어피치보다 1 큰 값 넣고 다시 재귀 보내기

const solution = (n, info) => {
    let answer = []; // 라이언의 결과를 담을 배열 
    let score = 0;    // 가장 큰 점수 차 

    const dfs = (index, remain, board) => { // index와 , 남은 횟수, 점수판을 전달
        if(remain < 0) return;// 만약 남은 횟수가 없으면 끝낸다.(리턴)

        if(remain === 0){ // 만약 남은 횟수가 0이면 라이언과 어피치 점수비교를 진행한다. 
            let rScore = 0;
            let aScore = 0;

            for(let i = 0; i < 11; i++){ //10개의 모든 요소를 돌 것
                if(info[i] === 0 && board[i] === 0) continue; //어피치와 라이언 모두 쏘지 않았다면 넘긴다. 
                // 모두 쏘지 않은게 아니라면 
                const diff = info[i] - board[i]; // 어피치의 맞춘 과녁 수와 라이언의 맞춘 과녁 수 차이를 구한다. 

                if(diff >= 0){ // 만약 차이가 양수라면 
                  aScore += (10 - i); // 어피치가 점수를 가져감 
                } else if(diff < 0){ // 차이가 음수라면 
                rScore += (10 - i); // 라이언이 점수를 가져감
                }
            }

            const diff = rScore - aScore; // 라이언의 점수에서 어피치의 점수를 뺀 차를 diff에 저장

            if(score === diff){ // 가장 큰 점수 차와 방금 구한 차이를 비교, 같다면 
                // 배열을 뒤집어 문자열로 변환 후 비교 -> 작은 수가 더 많은 걸 찾아낼 수 있음 
                const aReverse = [...answer].reverse().join("");
                const bReverse = [...board].reverse().join("");

                if(aReverse < bReverse){ // answer(기존 저장된 배열)이 board보다 작다면 
                    answer = [...board];    // answer의 값을 board로 변경 (board가 더 작은 수로 나온 결과이기 때문) 
                }
            } else if(score < diff){ // 가장 큰 점수 차보다 구한 차이가 더 크다면 
                answer = [...board]; // answer의 값을 board로 변경 
                score = diff; // 가장 큰 점수차는 차이로 변경 
            }
    
            return;
        }

        for(let i = index; i < 11; i++){ // 전달받은 index부터 모든 요소를 도는 반복문 
            const origin = board[i]; // origin에 i번째 맞춘 수를 저장 

            for(let j = info[i] + 1; j >= 0; j--){ // 어피치가 i번째에 쏜 횟수보다 1큰 수부터 반복
                board[i] = j; // 라이언의 i번째 자리에 j를 할당 
                dfs(i + 1, remain - j, board); // 재귀호출(증감된 i, 남은 쏠 수 있는 횟수, 라이언의 점수판) 
            }
            board[i] = origin; // 라이언의 점수판에 i번째 자리에 orgin(j값)을 할당해줌
        }
    }

    for(let i = 0; i < 11; i++){ // 11개의 요소를 만들기 위해 반복문 생성
        const board = Array(11).fill(0); // 11개의 0으로 가득 찬 배열 생성(라이언의 점수판)

        board[i] = info[i] + 1; // board의 i번 째 자리를 어피치의 화살 쏜 횟수 + 1을 해줌으로써 라이언이 이기는 경우를 만들어줌 
        dfs(i + 1, n - board[i], board); // 다음 요소를 채워주기 위해 재귀 실행 
    }

    return score === 0 ? [-1] : answer; // 최종적으로 가장 크게 나는 점수차가 0이라면 라이언이 진 것이므로 -1이 담긴 배열 리턴 아니라면 최종 라이언의 결과값을 담은 answer 배열 리턴 
}

*/

function solution(n, info) {
  function recursion(n, answer, info, idx) {
    // 반복되는 상황은 뭐다?
    // 어피치가 쏜 화살 횟수보다 answer이 더 작으면 추가시켜!
    if (n === 0){
      return -1;
    }
    if(answer[idx] < info[idx]) {
      answer[idx]++;
    }
  }
  // 정답을 출력할 빈 배열을 만들어둔다.
  let answer = new Array(info.length).fill(0);
  for (let i = 0; i < info.length; i++) {
    // info의 배열을 순회한다.
    recursion(n - 1, answer, info, i);
  }
}

// function solution(n, info) {
//     // 어피치에 점수 더한 거
//     let apeach = info.map((v,i)=>{return v*(10-i)});
//     // 어피치 점수
//     let apeachResult = apeach.reduce((sum, curr) => {
//         return sum + curr;}, 0);
//     return apeachResult;
// }
