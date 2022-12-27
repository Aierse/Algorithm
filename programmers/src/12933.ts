export function solution(n: number) {
    return +n.toString()
    .split('')
    .sort()
    .reverse()
    .join('')
}
