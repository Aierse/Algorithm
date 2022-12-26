export function solution(array: number[]) {
    return array.sort((a, b) => {
        return a - b
    })[Math.floor(array.length/2)]
}