function solution(survey, choices) {
    var answer = '';

    let object = {
        R: 0,
        T: 0,
        F: 0,
        C: 0,
        M: 0,
        J: 0,
        A: 0,
        N: 0
    }

    for (let i = 0; i < choices.length; i++) {
        if (choices[i] === 1) { object[survey[i][0]] += 3 }
        if (choices[i] === 2) { object[survey[i][0]] += 2 }
        if (choices[i] === 3) { object[survey[i][0]] += 1 }
        if (choices[i] === 5) { object[survey[i][1]] += 1 }
        if (choices[i] === 6) { object[survey[i][1]] += 2 }
        if (choices[i] === 7) { object[survey[i][1]] += 3 }
    }
    console.log(object)

    return `${object.T > object.R ? 'T' : 'R'}${object.F > object.C ? 'F' : 'C'}${object.M > object.J ? 'M' : 'J'}${object.N > object.A ? 'N' : 'A'}`
}
