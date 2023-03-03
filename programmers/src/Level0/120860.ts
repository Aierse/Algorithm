export function solution(dots: number[][]) {
    let first = dots[0];
    let second = dots.filter(v => v[0] !== first[0] && v[1] !== first[1])[0];
    return Math.abs((first[0] - second[0]) * (first[1] - second[1]));
}
