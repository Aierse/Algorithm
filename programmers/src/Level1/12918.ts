export function solution(s: string) {
    return RegExp(/^\d{4}$|^\d{6}$/).test(s)
}
