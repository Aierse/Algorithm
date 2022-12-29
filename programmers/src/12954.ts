export function solution(x: number, n: number) {
    return Array<number>(n).fill(x).map((v, i) => v * (i + 1))
}