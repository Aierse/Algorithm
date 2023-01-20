export function solution(my_string: string) {
    return my_string.split('').filter(v => /[\d+]/i.test(v)).reduce((acc, cur) => acc + +cur, 0)
}
