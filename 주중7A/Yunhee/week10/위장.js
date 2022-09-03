// 내 풀이
function solution(clothes) {
    let arr = [...clothes.map(e => [e[0]])];
    
    for(let i = 0; i < clothes.length-1; i++){
        let temp = [clothes[i][1]];
        let addClothes = [clothes[i][0]];
        
        for(let j = i+1; j < clothes.length; j++){
            if(!temp.includes(clothes[j][1])) {
                addClothes.push(clothes[j][0]);
                temp.push(clothes[j][1]);
            }
        }
        
        if(addClothes.length > 1){
            arr.push(addClothes);
        }
    }
    
    let set = new Set(arr);
    
    return set.size;
}

// 다른 사람 풀이
function solution(clothes) {
    return Object.values(clothes.reduce((obj, t)=> {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
    } , {})).reduce((a,b)=> a*(b+1), 1)-1;  
}

/*
1. clothes.reduce(function,{}) 최초값을 빈 객체로 생성하여 clothes의 옷 종류를 키(t[1])의 형태로 넣어준다.
2. 만약 obj에 해당 옷 종류가 존재하지 않는다면 키값에 1을 넣어주고 존재한다면 해당 값에 1을 더해준다.
3. 이렇게 생성된 Key와 Value를 Object.values를 통해 값만 불러온다.
4. reduce(function,1) 최초 값을 1로 설정하고 배열을 순차적으로 돌면서 누적 값에 (해당 옷종류의 갯수)+1(옷을 입지않은 경우)를 곱한다.
5. 모든 옷을 입지 않은 경우 제외 -1 후 return.
*/