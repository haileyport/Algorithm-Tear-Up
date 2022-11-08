function solution(s){
    
    const lowerArr = s.toLowerCase().split('');
    const p = lowerArr.filter(el => el === 'p').length;
    const y = lowerArr.filter(el => el === 'y').length;

   if(p === y) return true;
    
    return false;
    
}