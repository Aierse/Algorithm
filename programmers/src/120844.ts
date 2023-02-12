export function solution(numbers: number[], direction: string) {
    if (direction === 'right') numbers.unshift(numbers.pop()!) 
    else numbers.push(numbers.shift()!)

    return numbers
}