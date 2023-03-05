export function solution(answers: number[]) {
    const h1 = [1, 2, 3, 4, 5]
    const h2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const h3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    const result = [
        answers.filter((a, i) => a === h1[i % h1.length]).length, 
        answers.filter((a, i) => a === h2[i % h2.length]).length, 
        answers.filter((a, i) => a === h3[i % h3.length]).length,
    ]

    return result.map((v, i) => {
        if (v === Math.max(...result)) return ++i
    })
    .filter(x => x)
}