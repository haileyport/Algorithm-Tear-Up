function solution(s) {
    
    // s는 문자열이다.
    // 맨앞에 부호가 있는지 확인해야한다.
    // 부호가 있으면 맨 앞에 slice로 때주고 부호에 맞게 리턴해준다.
    
    return s[0] === '-' ? Number(s.slice(1)) * -1 : Number(s);
    
}