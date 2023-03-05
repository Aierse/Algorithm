export function solution(participant: string[], completion: string[]) {
    const result: {
        [key: string]: number
    } = {}

    for (const i of participant) {
        if (!result[i]) result[i] = 1
        else result[i]++
    }

    for (const i of completion) {
        result[i]--
    }

    return participant.find(v => result[v] !== 0)
}
