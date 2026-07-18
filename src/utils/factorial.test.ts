import { factorial } from '@/utils/factorial';

describe('factorial', () => {
  it('returns 1 for 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('returns 1 for 1', () => {
    expect(factorial(1)).toBe(1);
  });

  it('returns 120 for 5', () => {
    expect(factorial(5)).toBe(120);
  });

  it('throws for negative numbers', () => {
    expect(() => factorial(-1)).toThrow('factorial expects a non-negative integer');
  });

  it('throws for non-integer numbers', () => {
    expect(() => factorial(1.5)).toThrow('factorial expects a non-negative integer');
  });
});
