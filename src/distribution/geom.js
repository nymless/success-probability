/**
 * Returns the first n values of the probability mass function of the geometric distribution with
 * parameters n and p.
 * @param {number} n - number of independent trials.
 * @param {number} p - probability of success in one single trial.
 * @returns {number[]} the first n values of the probability mass function.
 */

export function geom(n, p) {
    const pmf = [];

    for (let k = 1; k <= n; k++) {
        pmf.push(p * (1 - p) ** (k - 1));
    }

    return pmf;
}
