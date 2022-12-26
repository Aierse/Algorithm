export function solution(arr: number[]) {
    return arr.filter((v, i) => v !== arr[i + 1])
}
