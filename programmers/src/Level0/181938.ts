export function solution(a: number, b: number) {
    const first = +`${a}${b}`;
    const second = 2 * a * b;
    
    return first > second ? first : second;
}
