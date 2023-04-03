export function isPrime(num: number) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (!(num % i)) return false;
  }

  return true;
}

export function solution(n: number) {
  var answer = new Set<number>();

  for (let i = 2; i <= n; i++) {
    if (n % i === 0 && isPrime(i)) {
      answer.add(i);
      n /= i;
    }
  }

  return [...answer];
}

console.log(solution(10));
console.log(solution(420));
