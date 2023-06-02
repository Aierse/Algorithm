export function isOdd(num: number) {
    return num % 2 !== 0;
}

export function solution(a: number, b: number) {
    if (isOdd(a) && isOdd(b))
        return a ** 2 + b ** 2;
    if (!isOdd(a) && !isOdd(b))
        return Math.abs(a - b);
    
    return 2 * (a + b);
}
