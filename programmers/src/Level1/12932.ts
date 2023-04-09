export function solution(n: number) {
    return n.toString()
        .split('')
        .reverse()
        .map(v => +v)
}