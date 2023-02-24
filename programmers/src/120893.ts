export function solution(my_string: string) {
    return [...my_string].map(v => /[a-z]/g.test(v) ? v.toUpperCase() : v.toLowerCase()).join('')
}