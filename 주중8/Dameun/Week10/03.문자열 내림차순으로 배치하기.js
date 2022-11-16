function solution(s) {
    //알파벳 소문자 역순 > 알파벳 대문자 역순
    return s.split('').sort().reverse().join('');
}

//3점 