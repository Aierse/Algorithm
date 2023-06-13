export function solution(a: number, b: number, c: number) {
    if (a === b && b === c)
        return (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
    if (a !== b && a !== c && b !== c)
        return a + b + c;
    
    return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
}
