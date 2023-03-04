export function solution(numbers: number[]) {
    return 45 - numbers.reduce((a, c) => a + c, 0)
}