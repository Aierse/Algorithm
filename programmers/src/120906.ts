export function solution(n: number) {
    return [...n.toString()].map(v => +v).reduce((acc, cur) => acc += cur)
}