export function solution(arr1: number[][], arr2: number[][]) {
    var answer = [[]];
    return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
}
