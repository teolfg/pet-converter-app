export function factorial(n: number): number {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('factorial expects a non-negative integer');
  }

  if (n <= 1) {
    return 1;
  }

  let result = 1;

  for (let current = 2; current <= n; current += 1) {
    result *= current;
  }

  return result;
}
