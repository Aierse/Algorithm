export function solution(n: number) {
    return n.toString()
        .split('')
        .reduce((a, c) => a += +c, 0)
}
