export function solution(my_string: string) {
    return my_string.split(/[a-z]/gi).map(v => +v).reduce((acc, cur) => acc += cur)
}
