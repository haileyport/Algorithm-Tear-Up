function solution(s) {
    var answer = [];

    let arr = s.split(' ')

    arr.forEach(el=>{
        answer.push(el.split('').map((word, idx) => 
                                idx%2 ? word.toLowerCase() : word.toUpperCase())
                                .join(''));
    })
    
    return answer.join(" ");
}
