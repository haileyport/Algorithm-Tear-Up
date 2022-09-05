// [PGS] 이상한 문자 만들기, +11
// 소요시간 52분 42초
// 메서드이용하여 간결하게 만들고 싶어 시도하느라 시간 오래걸림..
// 결국 이중 for문과 if문으로 제출 및 통과

// 테스트 1 〉	통과 (0.17ms, 30MB)
// 테스트 2 〉	통과 (0.10ms, 29.9MB)
// 테스트 3 〉	통과 (0.07ms, 29.8MB)
// 테스트 4 〉	통과 (0.14ms, 29.9MB)
// 테스트 5 〉	통과 (0.13ms, 30.1MB)
// 테스트 6 〉	통과 (0.07ms, 30MB)
// 테스트 7 〉	통과 (0.08ms, 30.2MB)
// 테스트 8 〉	통과 (0.15ms, 29.9MB)
// 테스트 9 〉	통과 (0.10ms, 30MB)
// 테스트 10 〉	통과 (0.14ms, 30MB)
// 테스트 11 〉	통과 (0.12ms, 30MB)
// 테스트 12 〉	통과 (0.11ms, 30MB)
// 테스트 13 〉	통과 (0.10ms, 30MB)
// 테스트 14 〉	통과 (0.07ms, 29.8MB)
// 테스트 15 〉	통과 (0.12ms, 29.8MB)
// 테스트 16 〉	통과 (0.10ms, 29.9MB)

function solution(s) {
    let result = '';
    let words = s.split(' ');
    for(let i = 0; i < words.length; i++){ // ['try','hello','world]
      for(j = 0; j < words[i].length; j++){ //['t','r','y' ...]
        if(j % 2 === 0){
            result += words[i][j].toUpperCase();
        }else {
            result += words[i][j].toLowerCase();
        }
    }
    
    if(i !== words.length - 1){
            result += ' ';
    }
    }

    return result;
}

// 메서드로 풀이 재시도
// 테스트 1 〉	통과 (0.11ms, 30.1MB)
// 테스트 2 〉	통과 (0.07ms, 30.2MB)
// 테스트 3 〉	통과 (0.07ms, 29.8MB)
// 테스트 4 〉	통과 (0.15ms, 29.9MB)
// 테스트 5 〉	통과 (0.11ms, 29.9MB)
// 테스트 6 〉	통과 (0.07ms, 30.1MB)
// 테스트 7 〉	통과 (0.08ms, 30.1MB)
// 테스트 8 〉	통과 (0.15ms, 30.1MB)
// 테스트 9 〉	통과 (0.12ms, 29.7MB)
// 테스트 10 〉	통과 (0.14ms, 30MB)
// 테스트 11 〉	통과 (0.16ms, 30.3MB)
// 테스트 12 〉	통과 (0.16ms, 30.2MB)
// 테스트 13 〉	통과 (0.10ms, 30.2MB)
// 테스트 14 〉	통과 (0.10ms, 30.1MB)
// 테스트 15 〉	통과 (0.09ms, 30.2MB)
// 테스트 16 〉	통과 (0.11ms, 30MB)

// 두번째에 사용해준 map에서 split과 join을 안해주어 계속 실패했던 것이었다....
// function solution(s) {
// return s.split(' ').map(el => el.split('').map((letter,i) 
// => i%2 === 0? letter.toUpperCase():letter.toLowerCase()).join('')).join(' ');
// }
