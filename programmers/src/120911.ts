export function solution(my_string: string) {

    return my_string.toLowerCase()
        .split('')
        .sort()
        .join('')
}
