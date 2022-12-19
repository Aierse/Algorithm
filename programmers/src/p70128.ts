function solution(a: number[], b: number[]) {
    let result = 0

    a.forEach((v, i) => {
        result += v * b[i]
    })

    return result
}