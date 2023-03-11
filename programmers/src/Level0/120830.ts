export function solution(n: number, k: number) {
    return n * 12000 + k * 2000 - 2000 * Math.floor(n / 10);
}
