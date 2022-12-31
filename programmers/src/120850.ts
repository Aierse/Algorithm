export function solution(my_string: string) {
    return [...my_string].filter(v => /[0-9]/.test(v))
        .map(v => +v)
        .sort((a, b) => a - b)
}
