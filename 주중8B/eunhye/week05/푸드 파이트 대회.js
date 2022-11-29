function solution(food) {
    // 왼쪽부터 만들어서 0넣고 뒤집기
    // 음식 종류와 양이 같아야 해서 1개 갖고 오면 못 먹음
    const arr = [];
    
    food.forEach((el, idx) => {
        if(el >= 2) {
            const eat = Math.floor(el/2);
            // repeat은 ... number type에 안 먹는다...
            arr.push(String(idx).repeat(eat));        
        }
    })
    return arr.join('') + 0 + arr.reverse().join('');
}