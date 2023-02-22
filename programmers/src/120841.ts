export function solution(dot: number[]) {
    const x = dot[0] > 0
    const y =  dot[1] > 0
    return x && y ? 1 : !x && y ? 2 : x && !y ? 4 : 3 
}