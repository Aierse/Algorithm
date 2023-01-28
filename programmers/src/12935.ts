export function solution(arr: number[]) {
    const answer = arr.filter(v => Math.min(...arr) !== v)
    return answer.length === 0 ? [-1] : answer
}
