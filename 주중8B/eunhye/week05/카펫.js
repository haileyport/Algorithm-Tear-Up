function solution(brown, yellow) {
    const box = brown + yellow;
    const mid = Math.floor(box/2);
    for(let i=mid; i>0; i--) {
        if(box%i !== 0) continue;
        
        const w = i;
        const h = box / i;
        if((w-2) * (h-2) === yellow){
            return [w, h]
        }
    }
}