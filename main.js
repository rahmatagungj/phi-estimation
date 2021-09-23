function estimate_phi_iteration(n) {
  /**
   * Estimate φ(n) via iteration
   */
  let total = 0;
  let k = 1;
  while (k <= n) {
    total += 1 / k;
    k += 1;
  }
  return total;
}

function estimate_phi(n) {
  let point_circle = 0;
  let point_total = 0;
  for (let i = 0; i < n; i++) {
    let x = Math.random(0, 1);
    let y = Math.random(0, 1);
    if (x ** 2 + y ** 2 <= 1) {
      point_circle++;
    }
    point_total++;
  }
  return (4 * point_circle) / point_total;
}

console.log(estimate_phi(1000000));
console.log(estimate_phi_iteration(1000000));
