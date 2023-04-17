export function solution(s: string) {
    return [...s].sort((a, b) => a < b ? 1 : -1).join('')
}
