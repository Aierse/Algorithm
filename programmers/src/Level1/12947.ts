export function solution(x: number) {
    return x % [...x.toString()].map(v => +v).reduce((acc, cur) => acc += cur, 0) === 0
}