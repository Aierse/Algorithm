export function solution(a: number, b: number) {
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    let day = b
    for (let i = 0; i < a - 1; i++) {
        day += month[i]
    }

    return week[(day + 4) % 7]
}
