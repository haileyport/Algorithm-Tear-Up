function solution(brown, yellow) {
    const total = brown + yellow;
    let width, height;
    
    for (height = 3; height <= brown; height++) {
        if (total % height !== 0) continue;
        width = total / height;
        if ((height - 2) * (width - 2) === yellow)
            return [width, height];
    }
    
    return [];
}
