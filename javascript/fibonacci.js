function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciSequence(n) {
  const sequence = [];
  for (let i = 0; i <= n; i++) {
    sequence.push(fibonacci(i));
  }
  return sequence;
}

console.log(fibonacciSequence(6));
