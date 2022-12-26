export function solution(phone_number: string) {
    return phone_number.slice(-4).padStart(phone_number.length, '*')
}
