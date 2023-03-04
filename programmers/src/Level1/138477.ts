export function solution(k: number, score: number[]) {
    let hall: number[] = []
    let answer: number[] = []

    for (const v of score) {
        if (hall.length < k) {
            hall.push(v)
            answer.push(Math.min(...hall))

            continue
        }

        const min = Math.min(...hall)

        if (v >= min) {
            hall.splice(hall.indexOf(min), 1, v);

            answer.push(Math.min(...hall))
        } else answer.push(Math.min(...hall))
    }

    return answer;
}
