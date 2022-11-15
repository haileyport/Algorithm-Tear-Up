function solution(phone_number) {
    let secret_number = phone_number.length - 4;
    return '*'.repeat(secret_number) + phone_number.slice(-4);
}