// 테스트 1 〉	통과 (0.08ms, 33.6MB)
// 테스트 2 〉	통과 (0.06ms, 33.4MB)
// 테스트 3 〉	통과 (0.08ms, 33.6MB)
// 테스트 4 〉	통과 (0.08ms, 33.5MB)
// 테스트 5 〉	통과 (0.19ms, 33.6MB)
// 테스트 6 〉	통과 (0.14ms, 33.4MB)
// 테스트 7 〉	통과 (0.14ms, 33.5MB)
// 테스트 8 〉	통과 (0.13ms, 33.5MB)
// 테스트 9 〉	통과 (0.19ms, 33.5MB)
// 테스트 10 〉	통과 (0.15ms, 33.5MB)
// 테스트 11 〉	통과 (0.15ms, 33.6MB)
// 테스트 12 〉	통과 (0.19ms, 33.5MB)
// 테스트 13 〉	통과 (0.29ms, 33.8MB)
// 테스트 14 〉	통과 (0.39ms, 33.7MB)
// 테스트 15 〉	통과 (0.89ms, 34MB)
// 테스트 16 〉	통과 (1.30ms, 34.5MB)
// 테스트 17 〉	통과 (0.98ms, 34.9MB)
// 테스트 18 〉	통과 (1.20ms, 35.2MB)
// 테스트 19 〉	통과 (1.26ms, 35.8MB)
// 테스트 20 〉	통과 (2.08ms, 35.7MB)


function checkRank(arr) {
    
    let maxWidthIdx = 0;
    let maxHeightIdx = 0;
    let secondWidthIdx = 0;
    let secondeHeightIdx = 0;
    
    let diff = 0;
    
    arr.forEach((v,i) => {
        if(arr[maxWidthIdx][0] < v[0]){
            maxWidthIdx = i;
        }
        
        if(arr[maxHeightIdx][1] < v[1]){
            maxHeightIdx = i;
        }
    })
    

    arr.forEach((v,i) => {
        if ((arr[maxHeightIdx][0] - v[0] !== 0) && (diff > arr[maxHeightIdx][0] - v[0])){
            secondWidthIdx = i;
        }
        
        if ((arr[maxWidthIdx][1] - v[1] !== 0) && (diff > arr[maxWidthIdx][1] - v[1])){
            secondeHeightIdx = i;
        }
    })
    
    return [maxWidthIdx, maxHeightIdx, secondWidthIdx, secondeHeightIdx];
    // return [maxWidthIdx, maxHeightIdx];
}

function solution(sizes) {
    // sizes : 모든 명함의 가로, 세로를 나타내는 2차원 배열
   
    // 가장 긴 가로의 길이의 인덱스
    // 가장 긴 세로의 길이의 인덱스
    let data = sizes.slice();
    
    let [maxWidthIdx, maxHeightIdx, secondWidthIdx, secondeHeightIdx] = checkRank(data);
    
    // 세로길이가 가장 긴 명함의 세로길이가 가로길이가 가장 긴 명함의 가로길이보다 작거나 같다면
    while(true){
        
        let sortedByWidth = data.sort((a, b) => a - b);
        
        if ((data[maxHeightIdx][1] <= data[maxWidthIdx][0]) && 
            (data[maxHeightIdx][0] <= data[secondeHeightIdx][1])){
        
            data.splice(maxHeightIdx, 1, data[maxHeightIdx].reverse());
        
            [maxWidthIdx, maxHeightIdx, secondWidthIdx, secondeHeightIdx] = checkRank(data);
        }
    
        else if ((data[maxWidthIdx][0] <= data[maxHeightIdx][1]) && 
            (data[maxWidthIdx][1] <= data[secondWidthIdx][0])){
        
            data.splice(maxWidthIdx, 1, data[maxWidthIdx].reverse());
        
            [maxWidthIdx, maxHeightIdx, secondWidthIdx, secondeHeightIdx] = checkRank(data);
        }
        
        else {
            return data[maxWidthIdx][0] * data[maxHeightIdx][1];
        }
    }
    
    
    
    
    
}

function solution(sizes) {
    const maxWidth = Math.max(...sizes.map(card => Math.min(...card)));
    const maxHeight = Math.max(...sizes.map(card => Math.max(...card)));
    return maxWidth * maxHeight;
}