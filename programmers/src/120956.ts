export function solution(babbling: string[]) {
    let answer = 0
    babbling.forEach(v => answer += v.split(/aya|ye|woo|ma/g).join('') === '' ? 1 : 0)

    return answer
}