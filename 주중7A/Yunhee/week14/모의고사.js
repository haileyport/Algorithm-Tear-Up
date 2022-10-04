function solution(answers) {
    const answer = ["12345", "21232425", "3311224455"];
    const answerCount = [];
    const result = [];
    let max = 0;
    
    // 수포자가 찍는 패턴을 배열로 만든다.
    function createArr(number){
        return number.repeat(answers.length)
                     .substring(0, answers.length)
                     .split("")
                     .map(Number);
    }
    
    // 배열에서 정답의 개수가 몇개인지 반환한다.
    function countCorrect(arr){
        return arr.filter((e, idx) => e === answers[idx]).length;
    }

    for(let i = 0; i < answer.length; i++){
        const arr = createArr(answer[i]);
        const count = countCorrect(arr);
        
        // 각 정답 개수를 배열에 넣는다.
        answerCount.push(count);
    }
    
    // 배열에서 최대값을 구한다.
    max = Math.max(...answerCount);
    
    // 배열을 반복하며 배열의 요소가 최대값과 같다면 result에 인덱스+1(수포자 번호)를 넣는다.
    for(let i = 0; i < answerCount.length; i++){
        if(answerCount[i] === max) result.push(i+1);
    }
    
    return result;
}