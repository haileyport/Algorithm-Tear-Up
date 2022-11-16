function solution(citations) {
    let count = 0;
    const sortedCit = citations.sort((a, b) => b - a);
    
    // h번 이상 인용된 논문이 h편일 때까지 
    // => 3편 이상 인용된 논문이 3편이 될 때까지
    while (count + 1 <= sortedCit[count]) count++;
    
    return count;
}