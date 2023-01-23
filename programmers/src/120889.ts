export function solution(sides: number[]) {
    const max = Math.max(...sides)
    return sides.reduce((acc, cur) => acc + cur) - max <= max ? 2 : 1
}