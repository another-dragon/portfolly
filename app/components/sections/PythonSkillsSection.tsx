import React from 'react';

export default function PythonSkillsSection() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-[#F92672]">Python Skills</h1>
      <p className="text-[#F8F8F2]">Here's a sample of my Python code demonstrating some advanced concepts:</p>
      <pre className="bg-[#3E3D32] p-4 rounded text-[#F8F8F2]">
        {`from typing import List, Callable
import functools

def memoize(func: Callable) -> Callable:
    """A decorator for memoizing function calls"""
    cache = {}
    @functools.wraps(func)
    def memoized(*args):
        if args not in cache:
            cache[args] = func(*args)
        return cache[args]
    return memoized

@memoize
def fibonacci(n: int) -> int:
    """Calculate the nth Fibonacci number"""
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

def is_prime(n: int) -> bool:
    """Check if a number is prime"""
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

def get_primes(limit: int) -> List[int]:
    """Get all prime numbers up to the limit"""
    return [n for n in range(2, limit) if is_prime(n)]

# Example usage
if __name__ == "__main__":
    print(f"The 10th Fibonacci number is: {fibonacci(10)}")
    print(f"Prime numbers up to 50: {get_primes(50)}")
`}
      </pre>
      <p className="text-[#F8F8F2]">This code demonstrates:</p>
      <ul className="text-[#F8F8F2]">
        <li>Use of type hints for better code readability and maintainability</li>
        <li>Implementation of a memoization decorator for optimizing recursive functions</li>
        <li>Recursive implementation of the Fibonacci sequence</li>
        <li>Prime number checking and generation</li>
        <li>List comprehension for concise and readable code</li>
      </ul>
    </div>
  )
}

