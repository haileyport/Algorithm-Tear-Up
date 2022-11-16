// 테스트 1 〉	통과 (0.32ms, 33.6MB)
// 테스트 2 〉	통과 (0.18ms, 33.6MB)
// 테스트 3 〉	통과 (0.39ms, 33.5MB)
// 테스트 4 〉	통과 (0.43ms, 33.5MB)
// 테스트 5 〉	통과 (0.30ms, 33.4MB)
// 테스트 6 〉	통과 (0.32ms, 33.6MB)
// 테스트 7 〉	통과 (0.58ms, 33.4MB)
// 테스트 8 〉	통과 (0.25ms, 33.4MB)
// 테스트 9 〉	통과 (0.19ms, 33.4MB)
// 테스트 10 〉	통과 (0.26ms, 33.5MB)
// 테스트 11 〉	통과 (0.43ms, 33.5MB)
// 테스트 12 〉	통과 (0.32ms, 33.5MB)
// 테스트 13 〉	통과 (0.45ms, 33.6MB)
// 테스트 14 〉	통과 (0.50ms, 33.5MB)
// 테스트 15 〉	통과 (0.38ms, 33.4MB)
// 테스트 16 〉	통과 (0.41ms, 33.5MB)
// 테스트 17 〉	통과 (0.55ms, 33.6MB)
// 테스트 18 〉	통과 (0.68ms, 33.6MB)
// 테스트 19 〉	통과 (1.36ms, 33.7MB)
// 테스트 20 〉	통과 (0.53ms, 33.6MB)
// 테스트 21 〉	통과 (0.61ms, 33.8MB)
// 테스트 22 〉	통과 (0.58ms, 33.5MB)
// 테스트 23 〉	통과 (0.67ms, 33.7MB)
// 테스트 24 〉	통과 (0.84ms, 33.7MB)
// 테스트 25 〉	통과 (0.75ms, 33.7MB)
// 테스트 26 〉	통과 (0.70ms, 33.7MB)

// 풀이시간 : 1시간 20분
// 점수 : 5점

function solution(new_id) {
    
    // 아이디 생성
    // 새로 가입하는 유저들이 카카오 아이디 규칙에 맞지 않는 아이디를 입력했을 때,
    // 입력된 아이디와 유사하면서 규칙에 맞는 아이디를 추천
    
    // 아이디의 길이 : 3~15
    // 알파벳 소문자, 숫자, 빼기, 밑줄, 마침표 만 사용가능
    // . 는 처음과 끝에 사용X / 연속 사용 불가
    
    // 추천 프로세스
    // 1단계 : 모든 대문자 -> 소문자로 치환
    // 2단계 : 알파벳 소문자, 숫자, 빼기, 밑줄, 마침표를 제외한 모든 문자 제거
    // 3단계 : .. 2번연속 ? .하나로 치환
    // 4단계 : . 이 처음이나 끝에 위치? 제거
    // 5단계 : new_id가 빈문자열 ? a 대입
    // 6단계 : 16자 이상? 첫 15개 문자를 제외한 나머지 문자 제거 // 만약 제거 후 처음과 끝에 . 존재? 제거
    // 7단계 : 2자 이하 ? 마지막 문자를 길이가 3이 될때까지 반복
    let result = '';
    
    // 1단계 : 모든 대문자 -> 소문자로 치환
    [...new_id].forEach(el => {
        el.charCodeAt() >= 60 && el.charCodeAt() <= 90 ? result += el.toLowerCase() : result += el;
    })
    
    // 2단계 : 알파벳 소문자, 숫자, 빼기, 밑줄, 마침표를 제외한 모든 문자 제거
    const reg = new RegExp(/[0-9a-z._-]/);
    
    result = [...result].filter(el => {
        return reg.exec(el);
    })
    
    // 3단계 : .. 2번연속 ? .하나로 치환
    const delDot = (arr) => {
        
        if (arr.indexOf('.') === -1){
            return arr;
        }
        
        let idx = arr.indexOf('.');
        let count = 1;
        for (let i = idx + 1; i < arr.length; i++){
            if (arr[i] === '.'){
                count++;
            }else{
                break;
            }
        }
        
        arr.splice(idx, count, true);
        
        return delDot(arr)
    }
    
    result = delDot(result).map(el => {
        return el === true ? '.' : el;
    });

    // 4단계 : . 이 처음이나 끝에 위치? 제거
    
    if (result[0] === '.' && result[result.length - 1] === '.'){
        result.splice(0,1);
        result.splice(result.length -1, 1);
    }else if (result[result.length - 1] === '.'){
        result.splice(result.length -1, 1);
    }else if (result[0] === '.'){
        result.splice(0,1);
    }
    
    
    // 5단계 : new_id가 빈문자열 ? a 대입
    
    if (result.length === 0){
        result.push('a');
    }
    
    // 6단계 : 16자 이상? 첫 15개 문자를 제외한 나머지 문자 제거 // 만약 제거 후 처음과 끝에 . 존재? 제거
    if (result.length >= 16){
        result.splice(15, result.length - 15);
        
        if (result[0] === '.' && result[result.length - 1] === '.'){
            result.splice(0,1);
            result.splice(result.length -1, 1);
        }else if (result[result.length - 1] === '.'){
            result.splice(result.length -1, 1);
        }else if (result[0] === '.'){
            result.splice(0,1);
        }
        
    }
    
    // 7단계 : 2자 이하 ? 마지막 문자를 길이가 3이 될때까지 반복
    if (result.length <= 2){
        while (result.length <= 2){
            result.push(result[result.length - 1]);
        }
    }
    
    return result.join('');
}