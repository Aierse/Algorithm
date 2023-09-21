export function solution(n: number, arr1: number[], arr2: number[]) {
    return Array.from({length: n}, (_, i) => (arr1[i] | arr2[i])).map((v) => v.toString(2).padStart(n, " ").replace(/0/g, " ").replace(/1/g, "#"));
}
