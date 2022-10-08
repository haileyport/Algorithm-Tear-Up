function solution(s) {
    // 단어의 가운데 글자를 반환, 만약 짝수라면 가운데 두글자 반환
    let leng = s.length / 2;
    
    if(s.length % 2 === 0){    
        return `${s[leng-1]}${s[leng]}`
    }else{
        return s[Math.floor(leng)];
    }
}