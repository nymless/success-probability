/**
 * Returns the n-th factorial.
 * @param {number} n - factorial number.
 * @returns {number} n-th factorial.
 */

export function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    let prev = 1;
    let curr = 2;

    for (let i = 2; i <= n; i++) {
        curr = prev * i;
        prev = curr;
    }

    return curr;
}
