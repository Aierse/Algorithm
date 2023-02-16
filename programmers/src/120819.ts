export function solution(money: number) {
    return [Math.floor(money / 5500), money % 5500]
}