// 숫자를 하나씩 나눈다.
// 각 숫자를 시작점으로 삼아 다른 숫자들과의 조합을 만든다.
// 조합 중 소수의 개수를 센다.

function getPermutation(arr, length) {
    let result = [];
    if (length === 1) return arr.map(el => [el]);

    arr.forEach((fixed, idx, arr) => {
        const restArr = [...arr.slice(0, idx), ...arr.slice(idx+1)];
        const attaching = getPermutation(restArr, length-1);
        const attached = attaching.map(el => [fixed, ...el]);
        result.push(...attached);
    }) 

    return result;
}


function checkPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function solution(numbers) {
    const nums = numbers.split('');
    
    const permutations = [];
    for (let i = 1; i <= nums.length; i++) {
        permutations.push(...getPermutation(nums, i));;
    }
    
    const permutationsSet = new Set(permutations.map(n => Number(n.join(''))));

    let answer = 0;
    permutationsSet.forEach(n => {if(checkPrime(n)) answer++})
    return answer;
}
