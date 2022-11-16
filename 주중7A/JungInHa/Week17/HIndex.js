function solution(citations) {
    const sorted = citations.sort((a, b) => b - a);
    
   for (let i = 0; i < citations.length; i++) { 
        if (i >= citations[i]) return i;
    }
    
    return hIndex ? hIndex : citations.length;
}
