export function solution(s: string){
    s = s.toLowerCase()
    return s.split('p').length === s.split('y').length
}