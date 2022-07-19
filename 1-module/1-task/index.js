function factorial(n) {
  let F = 1;
  for (let i = 1; i <= n; i=i+1) {
    F *= i;
  }
  return F;
}

console.log( factorial(5) );