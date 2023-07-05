export function solution(my_string: string, n: number) {
    return [...my_string].map(v => v.repeat(n)).join('')
}