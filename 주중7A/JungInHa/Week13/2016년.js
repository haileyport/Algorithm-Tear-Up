function solution(a, b) {
    const daysOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    let day = 4 + b; 
		 
    for (let i = 0; i < a - 1; i++) {
        day += daysInMonth[i];
    }  

    day %= 7;

    return daysOfWeek[day];
}
