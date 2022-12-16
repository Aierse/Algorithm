export function solution(k: number, d: number) {
    const maximum = d * d
    
    let count = 0

    for (let x = 0; x <= d; x += k) {
        for (let y = 0; y <= d; y += k) {
            if (x * x + y * y <= maximum) count++
        }
    }
    
    return count
}

console.log(solution(2, 4))
console.log(solution(1, 5))