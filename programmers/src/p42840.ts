function counting(answers: number[], human: number[]) {
    return answers.reduce((acc, cur, idx) => {
        if (cur === human[idx % human.length]) {
            acc++
        }

        return acc
    }, 0)
}

function solution(answers: number[]) {
    const h1 = [1, 2, 3, 4, 5]
    const h2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const h3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    const result = [counting(answers, h1), counting(answers, h2), counting(answers, h3)]

    return result.map((v, i) => {
        if (v === Math.max(...result)) return i+1 
    })
    .filter(x => x)
}