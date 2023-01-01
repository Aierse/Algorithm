export function solution(array: number[], commands: number[][]) {
    return commands.reduce((acc, cur) => {
        acc.push(array.slice(cur[0] - 1, cur[1]).sort((a, b) => a - b)[cur[2] - 1])

        return acc
    }, [])
}