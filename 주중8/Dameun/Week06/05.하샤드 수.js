function solution(x) {
    var answer = true;
    let answerArray = String(x).split("").map(Number)
    let divNumber = answerArray.reduce((pre,cur) => pre + cur,0)
    if(x%divNumber !== 0)answer = false;
    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12947
//15분 내
//문제를 꼼꼼히 안 읽고 두 자리 수로만 생각해서 만들었다가 틀린거 보고 고침 ㅎㅎ