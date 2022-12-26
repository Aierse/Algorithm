export type value = {
    [key: number]: boolean
}

export function solution(dots: number[][]): number {
    let v: value = {}

    for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
            let lean = Math.abs(dots[i][0] - dots[j][0]) / Math.abs(dots[i][1] - dots[j][1])

            if (!v[lean]) { // 해당 기울기가 존재하지 않을 때
                v[lean] = true
            }
            else {
                return 1
            }
        }
    }

    return 0
}
