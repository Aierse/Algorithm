export function solution(polynomial: string) {
    var answer: { [key: string]: number } = {
        x: 0,
        num: 0,
    };
    
    polynomial.split(" + ").forEach((v) => {
        if (v.includes("x")) {
            const value = v.replace("x", "");
            answer.x += value === "" ? 1 : +value;
        }
        else answer.num += +v;
    })
    
    if (answer.x === 1 && answer.num === 0) return "x";
    if (answer.x === 0) return `${answer.num}`;
    if (answer.x === 1) return `x + ${answer.num}`;
    if (answer.num === 0) return `${answer.x}x`;
        
    return `${answer.x}x + ${answer.num}`;
}
