const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// 한 반의 평균점수 구하기
// 그 평균점수 이준 이상 점수 몇몇인지 구하기
// 전체 명수에 비해 평균이상 학생의 비율이 어떻게 되는지 구하기

// let clacssNum = Number(input[0]);
// let smartStudent = 0;
// let classAver = 0;
// let classSum = 0;
// for(let i=1; i<= input.length; i++){ 
//     let clacss = [];
    
//     clacss = input[i].split(' '); // 각 반과 점수가 세트가 되어 하나의 요소가 되도록 한다.
    
//     for(let j=1; j<=n; j++){
//         classSum += clacss[j]; // 반의 제일 첫번째 index를 제외한 나머지를 모두 더한다.
//     }
//     classAver = classSum/clacss[0];
//     for(let a = 1; a <= clacss[0]; a++){
//        if(clacss[a]>classAver){
//           smartStudent++;
//        }
//    }
// }
//     console.log(((smartStudent/clacss[0])*100).toFixed(3)+"%");

////위는 실패한 코드..
// 무엇이 문제였는지 파악하기 위해 살려두겠습니다

for(let i = 1; i <= input[0]; i++) { // input[0]은 몇 반이 있는지에 대한 정보니까 0번 index를 제외한 1번부터 input[0]만큼 순회하며 반별로 인자를 탐색 할 수 있도록 한다.
    let scoresSum = 0;
    let smartStudent = 0;

    let scores = input[i].split(" ").map(Number); // 각 반별로 나눈 점수를 모두 숫자형태로 가져올 수 있게 한다.
    let clacssNum = scores[0]; // 각 반의  0 번째 index는 반의 명수이므로 따로 clacssNum을 선언해서 할당 해 준다.

    for(let j = 1; j <= clacssNum; j++) {
        scoresSum += scores[j];     // 공백으로 나눈 점수들을 앞서 선언한 scoresSum에 할당하는데, 0번째 index는 반의 명수을 나타내므로 제외하고 1부터 순회하며 더해준다.
    }
    
    let clacssAvg = scoresSum / clacssNum; // 각 반의 합산안 값인 scoresSum과 각 반의 명수인 clacssNum을 활용하여 각 반의 평균을 clacssAvg에 할당한다.
    for(let a = 1; a <= clacssNum; a++) {  // 다시 for문을 열어서 clacssNum만큼 각 반의 점수를 순회한다.
        if(scores[a] > clacssAvg) {   // if문으로 평균보다 높은 점수를 조건으로 설정하여 ture일 경우 smartStudent에 ++로 횟수를 더해준다.
            smartStudent++
        }
    }
    console.log(((smartStudent / clacssNum) * 100).toFixed(3) + "%"); // 백분율을 구해서 소수점 셋째자리까지 출력하도록 하고 %를 뒤에 붙여준다.
}

// 다른분의 풀이를 참고하며 제 풀이를 보완하여 다시 코드 정리했습니다!
// 제 머리속에 넣기 위해 주석을 꼼꼼하게 적어보았는데 뭔가 정신이없네요ㅜㅜ 다음번엔 깔끔하게 하도록 노력해볼게요!!