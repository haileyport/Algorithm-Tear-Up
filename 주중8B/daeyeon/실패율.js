/*
테스트 1 〉	통과 (0.18ms, 33.6MB)
테스트 2 〉	통과 (0.26ms, 33.6MB)
테스트 3 〉	통과 (1.16ms, 34.1MB)
테스트 4 〉	통과 (2.57ms, 38.4MB)
테스트 5 〉	통과 (2.99ms, 40.5MB)
테스트 6 〉	통과 (0.32ms, 33.5MB)
테스트 7 〉	통과 (0.80ms, 33.8MB)
테스트 8 〉	통과 (2.58ms, 38.4MB)
테스트 9 〉	통과 (2.98ms, 40.6MB)
테스트 10 〉	통과 (2.52ms, 38.2MB)
테스트 11 〉	통과 (2.95ms, 38.4MB)
테스트 12 〉	통과 (2.63ms, 38.9MB)
테스트 13 〉	통과 (2.70ms, 39.4MB)
테스트 14 〉	통과 (0.21ms, 33.5MB)
테스트 15 〉	통과 (2.46ms, 37.5MB)
테스트 16 〉	통과 (2.29ms, 37.9MB)
테스트 17 〉	통과 (2.26ms, 37.4MB)
테스트 18 〉	통과 (2.26ms, 37.9MB)
테스트 19 〉	통과 (0.58ms, 33.7MB)
테스트 20 〉	통과 (2.30ms, 38.4MB)
테스트 21 〉	통과 (2.42ms, 37.8MB)
테스트 22 〉	통과 (2.84ms, 40.4MB)
테스트 23 〉	통과 (2.64ms, 39.5MB)
테스트 24 〉	통과 (2.67ms, 39.8MB)
테스트 25 〉	통과 (0.10ms, 33.5MB)
테스트 26 〉	통과 (0.08ms, 33.5MB)
테스트 27 〉	통과 (0.08ms, 33.4MB)
*/

function solution(N, stages) {
    //해당스테이지에 도달해야만 실패율에 포함
    //객체에 해당 스테이지, 도달한사람을 key, value로 넣는다
    //해당스테이지에 도달한사람들 : 현재스테이지 + 뒤의 스테이지 사람모두
    //현재스테이지에 있는사람 / 현재스테이지 + 뒤의 스테이지 사람모두
    //실패율이 높은 스테이지 부터 정렬
    //실패율이 같으면 작은번호 스테이지 부터 sort시 key값도 같이비교 하면됨.
    
    let obj = {};
    for(let i =1 ; i<=N ;i++) obj[i] = 0;   //모든 라운드실패자 0으로 초기화
    
    for(let i = 0 ; i < stages.length; i++){
        if(obj[stages[i]] === undefined) continue;  //마지막라운드성공한사람은 N+1이므로 패스
        else obj[stages[i]]+=1; //해당라운드 도전중인사람 +1
    }
    
    let arr = [];
    let values = Object.values(obj);    //실패한 사람의수
    
    // i: 해당 스테이지 
    let total = stages.length;  //해당 스테이지를 도전한 사람의 수 : 전체도전자수 - 이전스테이지실패자수
    for(let i = 0 ; i<N ; i++){
        
        if(total === 0 ){
            arr.push([i+1,0])}
        else
            arr.push([i+1,values[i]/total])
        total -= values[i];
    }
    
    //-1 a를먼저 +1 b를 먼저
    arr = arr.sort((a,b) => {
        if(a[1] > b[1])
            return -1;
        else if(a[1]<b[1])
            return 1;
        else {
            if(a[0] > b[0]) return 1;
            else return -1;
        }
    })
    
    return arr.map(el=>el[0])
}