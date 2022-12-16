export function solution(k: number, d: number) {
    let count = 0

    for (let x = 0; x <= d; x += k) {
        count += Math.floor(Math.floor(Math.sqrt(d ** 2 - x ** 2)) / k) + 1
    }
    
    return count
}

console.log(solution(2, 4))
console.log(solution(1, 5))