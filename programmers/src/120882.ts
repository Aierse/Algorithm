export function solution(score: number[][]) {
    let sortScore: number[][] =  Array.from(Array(score.length), () => Array(2).fill(null))

    for (let i = 0; i < score.length; i++) {
        sortScore[i] = score[i]
    }

    sortScore.sort((a, b) => (b[0] + b[1]) - (a[0] + a[1]))

    let answer: { [key: number]: number } = {}

    let rank = 1
    sortScore.forEach(v => {
        const average = (v[0] + v[1]) / 2

        if (answer[average] === undefined) answer[average] = rank
        rank++
    })

    return score.map(v => answer[(v[0] + v[1]) / 2])
}