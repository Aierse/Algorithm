export function solution(numbers: number[]) {
    return numbers.reduce((acc, cur) => acc + cur) / numbers.length
}