function solution(array: number[]) {
    return [Math.max(...array), array.indexOf(Math.max(...array))]
}