export function solution(n: number) {
    const isOdd = n % 2 === 1;
    let answer = 0;

    if (isOdd) {
        for (let i = 1; i <= n; i += 2) {
            answer += i;
        }
    } else {
        for (let i = 2; i <= n; i += 2) {
            answer += i ** 2;
        }
    }

    return answer;
}