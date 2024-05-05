import { choose } from "./choose.js";

/**
 * Returns the probability mass function of the binomial distribution with
 * parameters n and p.
 * @param {number} n - number of independent experiments.
 * @param {number} p - probability of success in one single experiment.
 * @returns {number[]} discrete probability mass function.
 */

export function binom(n, p) {
    const pmf = [];

    for (let k = 0; k <= n; k++) {
        pmf.push(choose(n, k) * p ** k * (1 - p) ** (n - k));
    }

    return pmf;
}
