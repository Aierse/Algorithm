export function solution(a: number[], b: number[]) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0)
}