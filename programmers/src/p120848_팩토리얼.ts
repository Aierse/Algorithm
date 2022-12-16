export function solution(n: number): number {
    let result = 1

    for (let i = 1; ; i++) {

        if ((result *= i) >= n)
            return result === n ? i : i - 1
    }
}

console.log(solution(3628800))
console.log(solution(7))