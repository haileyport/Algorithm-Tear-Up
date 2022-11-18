function solution(brown, yellow) {
    var answer = [];
    let sum = brown + yellow;

    for (let height = 3; height <= brown; height++) {
        if (sum % height === 0) {
            let weight = sum / height;

            if ((height - 2) * (weight - 2) === yellow) {
                return [weight, height];
            }
        }
    }
    return answer;
}
