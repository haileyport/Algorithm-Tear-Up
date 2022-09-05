
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