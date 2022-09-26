// 실행 결과
// 테스트 1 〉	통과 (0.28ms, 30.2MB)
// 테스트 2 〉	통과 (0.43ms, 30.3MB)
// 테스트 3 〉	통과 (551.64ms, 71.4MB)
// 테스트 4 〉	통과 (0.41ms, 29.9MB)
// 테스트 5 〉	통과 (0.52ms, 30MB)
// 테스트 6 〉	통과 (3.56ms, 30.2MB)
// 테스트 7 〉	통과 (4.66ms, 30.4MB)
// 테스트 8 〉	통과 (11.01ms, 33.6MB)
// 테스트 9 〉	통과 (161.49ms, 51.9MB)
// 테스트 10 〉	통과 (84.38ms, 51.6MB)
// 테스트 11 〉	통과 (321.48ms, 71.2MB)
// 테스트 12 〉	통과 (0.71ms, 30.2MB)
// 테스트 13 〉	통과 (0.68ms, 30.2MB)
// 테스트 14 〉	통과 (188.36ms, 47.9MB)
// 테스트 15 〉	통과 (150.99ms, 56MB)
// 테스트 16 〉	통과 (0.69ms, 30.2MB)
// 테스트 17 〉	통과 (0.76ms, 30.2MB)
// 테스트 18 〉	통과 (1.16ms, 30.3MB)
// 테스트 19 〉	통과 (1.51ms, 30.3MB)
// 테스트 20 〉	통과 (155.28ms, 47.8MB)
// 테스트 21 〉	통과 (333.32ms, 56.3MB)
// 테스트 22 〉	통과 (0.30ms, 30.1MB)
// 테스트 23 〉	통과 (0.34ms, 30.1MB)
// 테스트 24 〉	통과 (0.30ms, 30.3MB)

// 풀이시간 : 아마 1시간 정도? (1달전 쯤 푼 문제)
// 점수 : 기억안남












// id_list : 유저목록
// report : "신고한유저 신고당한유저"
// k : 정지까지 신고횟수

// 1. 중복 : 같은 사용자가 여러번 신고한 경우는 신고횟수는 1회로 처리
// 2. 사용자 별 신고한 횟수와 신고당한 횟수를 담는 객체로 컨트롤
// 3. 그 객체를 순회하면서 k 이상인 유저의 인덱스에 +1, 그 유저를 신고한 유저에게 +1

// let exObj = {
//     muzi : {
//         declare : ['frodo', 'neo'],
//         beDeclared : 0
//     }
// }

function solution(id_list, report, k) {
    let resObj = {};
    var answer = [];
    
    id_list.forEach(el => {
        resObj[el] = {'declare' : [], 'beDeclared' : 0}
    })
    
    answer = id_list.map(el => 0);
    
    for (let i = 0; i < report.length; i++){
        let data = report[i].split(' ');
        
        if(resObj[data[0]].declare.includes(data[1])){
            continue;
        }else{ 
            resObj[data[0]].declare.push(data[1]) 
        }
        
        resObj[data[1]].beDeclared += 1;
    }
    
    
//     answer = id_list.map(el => {
//         let count = 0;
//         if (resObj[el].beDeclared >= k){
//             count += 1;
            
//         } 
//     })
    let stopUser = [];
    
    Object.keys(resObj).forEach(el => {
        if (resObj[el].beDeclared >= k){
            stopUser.push(el);
        }  
    })
  
    
    for (let key in resObj){
        
        resObj[key].declare.forEach(el => {
            if (stopUser.includes(el)){
                answer[id_list.indexOf(key)] += 1;
            }
            // answer.push([key, el])
        })
    
    }

    
    return answer;
}