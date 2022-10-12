// 테스트 1 〉	통과 (0.24ms, 33.4MB)
// 테스트 2 〉	통과 (0.24ms, 33.5MB)
// 테스트 3 〉	통과 (0.24ms, 33.4MB)
// 테스트 4 〉	통과 (0.38ms, 33.5MB)
// 테스트 5 〉	통과 (0.44ms, 33.4MB)
// 테스트 6 〉	통과 (0.25ms, 33.4MB)
// 테스트 7 〉	통과 (0.28ms, 33.5MB)
// 테스트 8 〉	통과 (0.25ms, 33.4MB)
// 테스트 9 〉	통과 (0.42ms, 33.5MB)
// 테스트 10 〉	통과 (0.29ms, 33.4MB)
// 테스트 11 〉	통과 (0.44ms, 33.6MB)
// 테스트 12 〉	통과 (0.45ms, 33.5MB)
// 테스트 13 〉	통과 (0.48ms, 33.5MB)
// 테스트 14 〉	통과 (0.84ms, 33.6MB)
// 테스트 15 〉	통과 (0.65ms, 33.5MB)
// 테스트 16 〉	통과 (0.66ms, 33.5MB)
// 테스트 17 〉	통과 (1.46ms, 33.5MB)
// 테스트 18 〉	통과 (0.90ms, 33.6MB)
// 테스트 19 〉	통과 (0.80ms, 33.5MB)
// 테스트 20 〉	통과 (0.81ms, 33.5MB)

// 풀이시간 : 3시간..정도?
// 점수 : 5점





function solution(numbers, hand) {
    // numbers : 누를 번호들을 담은 배열
    // hand : 오른손잡이인지 왼손잡이인지
    
    // 왼손엄지의 default : *
    // 오른손엄지의 default : #
    
    // 왼쪽 키패드 (1,4,7)은 왼손이
    // 오른 키패드 (3,6,9)는 오른손이 누른다
    // 가운데 키패드 (2,5,8,0)은 각각 더 가까운 손이 누른다.
    
    // 그랬을 때 numbers의 각각 번호가 어떤 손이 눌렀는지를 알려주는 배열 리턴
    
    //---------------------------------------------------------------------
    // 일단, 최종 결과는 numbers를 map으로 치환하는것이 더 효율적일듯
    
    // 일단 키패드를 배열로 나타내면
    /*
        let arr = 
        [
         [1,2,3],
         [4,5,6],
         [7,8,9],
         [*,0,#]
                ]
        
        left와 right의 default 값은
        left = arr[4][0]
        right = arr[4][2]
        
        
        위의 배열을 토대로 보았을때,
        
        각 배열의 0번 인덱스는 왼손만 접근할수 있고
        각 배열의 2번 인덱스는 오론손만 접근할 수 있다.
        
        가운데 키패드의 접근 거리를 구하기 위해서는
        1. 속한 배열의 1번 인덱스가 찾는 키패드라면 거리는 1
        2. 만약 현재위치보다 찾는 키패드가 작다면 위의 배열에서 탐색
            - 1차원 인덱스의 감소량 + 1이 거리가 된다.
            
        3. 만약 현재위치보다 찾는 키패드가 크다면 아래 배열에서 탐색
            - 1차원 인덱스의 증가량 + 1이 거리가 된다.
            
        
        왼쪽과 오른쪽 거리를 비교했을때 더 작은 쪽이 누르게된다.
        만약, 왼쪽과 오른쪽이 같다면 hand가 뭐냐에 따라 결정   

    */
    const keyPad = 
              [
                  [1,2,3],
                  [4,5,6],
                  [7,8,9],
                  ['*',0,'#']
              ]
        
    const leftKey = [1,4,7,'*'];
    const rightKey = [3,6,9,'#'];
    const middleKey = [2,5,8,0];
    
    let leftPos = keyPad[3][0];
    let rightPos = keyPad[3][2];
    
    return numbers.map((el, idx) => {
        
        
        
        // 만약 leftKey에 있다면 0번 인덱스일 것이다.
        if (leftKey.indexOf(el) !== -1){
            // 위치 기록
            leftPos = keyPad[leftKey.indexOf(el)][0];
            // number에 mapping
            return 'L';
        } 
        
        // 만약 rightKey에 있다면 2번 인덱스일 것이다.
        else if (rightKey.indexOf(el) !== -1){
            // 위치 기록
            rightPos = keyPad[rightKey.indexOf(el)][2];
            // number에 mapping
            return 'R';
        } 
        
        else {
            let leftDistance = 0;
            let rightDistance = 0;
            
            // 왼손 오른손 둘다 가운데 키패드에 있다면?
            if ((middleKey.indexOf(leftPos) !== -1) && (middleKey.indexOf(rightPos) !== -1)){
                leftDistance = Math.abs(middleKey.indexOf(leftPos) - middleKey.indexOf(el));
                rightDistance = Math.abs(middleKey.indexOf(rightPos) - middleKey.indexOf(el));
                
                if (leftDistance - rightDistance === 0){
                    if (hand === 'right'){
                        rightPos = keyPad[middleKey.indexOf(el)][1];
                        return 'R';
                    }else{
                        leftPos = keyPad[middleKey.indexOf(el)][1];
                        return 'L';
                    }      
                }else if (leftDistance - rightDistance > 0){
                    rightPos = keyPad[middleKey.indexOf(el)][1];
                    return 'R';
                }else {
                    leftPos = keyPad[middleKey.indexOf(el)][1];
                    return 'L';
                }
            }
            
            // 왼손이 가운데 키패드에 있다면?
            else if (middleKey.indexOf(leftPos) !== -1){
                leftDistance = Math.abs(middleKey.indexOf(leftPos) - middleKey.indexOf(el));
                rightDistance = Math.abs(rightKey.indexOf(rightPos) - middleKey.indexOf(el)) + 1;
                
               if (leftDistance - rightDistance === 0){
                    if (hand === 'right'){
                        rightPos = keyPad[middleKey.indexOf(el)][1];
                        return 'R';
                    }else{
                        leftPos = keyPad[middleKey.indexOf(el)][1];
                        return 'L';
                    }      
                }else if (leftDistance - rightDistance > 0){
                    rightPos = keyPad[middleKey.indexOf(el)][1];
                    return 'R';
                }else {
                    leftPos = keyPad[middleKey.indexOf(el)][1];
                    return 'L';
                }
            }
            // 오른손이 가운데 키패드에 있다면?
            else if (middleKey.indexOf(rightPos) !== -1){
                rightDistance = Math.abs(middleKey.indexOf(rightPos) - middleKey.indexOf(el));
                leftDistance =  Math.abs(leftKey.indexOf(leftPos) - middleKey.indexOf(el)) + 1;
                
                if (leftDistance - rightDistance === 0){
                    if (hand === 'right'){
                        rightPos = keyPad[middleKey.indexOf(el)][1];
                        return 'R';
                    }else{
                        leftPos = keyPad[middleKey.indexOf(el)][1];
                        return 'L';
                    }      
                }else if (leftDistance - rightDistance > 0){
                    rightPos = keyPad[middleKey.indexOf(el)][1];
                    return 'R';
                }else {
                    leftPos = keyPad[middleKey.indexOf(el)][1];
                    return 'L';
                }
            }
            
            // 오른쪽과 왼쪽의 같은 선상에 있다면?
            else if ((el === keyPad[leftKey.indexOf(leftPos)][1]) &&
                (el === keyPad[rightKey.indexOf(rightPos)][1])){
                
                if (hand === 'right'){
                    rightPos = keyPad[middleKey.indexOf(el)][1];
                    return 'R';
                }else{
                    leftPos = keyPad[middleKey.indexOf(el)][1];
                    return 'L';
                }      
            }
            // 왼손의 위치와 같은 선상에 있다면?
            else if (el === keyPad[leftKey.indexOf(leftPos)][1]){
                leftPos = keyPad[middleKey.indexOf(el)][1];
                return 'L'
            }
            // 오른손의 위치와 같은 선상에 있다면?
            else if (el === keyPad[rightKey.indexOf(rightPos)[1]]){
                rightPos = keyPad[middleKey.indexOf(el)[1]];
                return 'R'
            }
            
            // 왼손 오른손 둘다 서로 다른 선상에 있다면?
            else {
                leftDistance =  Math.abs(leftKey.indexOf(leftPos) - middleKey.indexOf(el)) + 1;
                rightDistance = Math.abs(rightKey.indexOf(rightPos) - middleKey.indexOf(el)) + 1;
                
                if (leftDistance - rightDistance === 0){
                    if (hand === 'right'){
                        rightPos = keyPad[middleKey.indexOf(el)][1];
                        return 'R';
                    }else{
                        leftPos = keyPad[middleKey.indexOf(el)][1];
                        return 'L';
                    }      
                }else if (leftDistance - rightDistance > 0){
                    rightPos = keyPad[middleKey.indexOf(el)][1];
                    return 'R';
                }else {
                    leftPos = keyPad[middleKey.indexOf(el)][1];
                    return 'L';
                }
            }
        }
        
            
    }).join('')
}