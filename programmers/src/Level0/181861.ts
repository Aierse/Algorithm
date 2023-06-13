export function solution(arr: number[]) {
    return Array.from(arr, (v) => Array(v).fill(v)).flat();
}
