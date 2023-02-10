export function solution(num: number, k: number) {
    const i = num.toString().indexOf(k.toString())
    return i === -1 ? -1 : i + 1
}