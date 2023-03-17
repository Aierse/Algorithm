export function solution(numbers: number[], k: number) {
    return numbers[(k - 1) * 2 % numbers.length];
}
