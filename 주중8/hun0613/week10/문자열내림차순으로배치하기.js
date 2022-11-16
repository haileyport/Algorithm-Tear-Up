function solution(s) {
    //     let lowerCase = [];
    //     let upperCase = [];
        
    //     // 소문자 > 대문자
    //     // 큰거에서 작은거 순
        
    //     for (let i = 0; i < s.length; i++){
    //         if (s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122){
    //             lowerCase.push(s[i].charCodeAt());
    //         }else{
    //             upperCase.push(s[i].charCodeAt());
    //         }
    //     }
        
    //     upperCase = upperCase.sort((a, b)=> b - a).map(el => String.fromCharCode(el));
    //     lowerCase = lowerCase.sort((a, b)=> b - a).map(el => String.fromCharCode(el));
        
        
    //     return [...lowerCase, ...upperCase].join('');
        
        
        // 방법2
    //     let arr = s.split('').map(el => el.charCodeAt()).sort((a,b)=>b-a);
        
        
    //     return arr.map(el => String.fromCharCode(el)).join('');
        
        
        // 방법3
        
        return s.split('').sort().reverse().join('');
    }