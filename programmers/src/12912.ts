export function solution(a: number, b: number) {
    [a, b] = a < b ? [a, b] : [b, a]

    return Array<number>(b - a + 1).fill(a).map((v, i) => v + i).reduce((a, c) => a + c)
}


console.log(solution(5, 3))
