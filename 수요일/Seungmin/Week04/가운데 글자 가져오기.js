function solution(s) {
    let harf = parseInt(s.length/2);
  
    return s.length%2===0 ? s[harf-1]+s[harf] : s[harf]

}