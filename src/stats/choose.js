import { factorial } from "./factorial.js";

/**
 * Returns the number of k-combinations.
 * @param {number} n - from n elements.
 * @param {number} k - choose k combinations.
 * @returns {number} number of k-combinations.
 */

export function choose(n, k) {
    return factorial(n) / (factorial(k) * factorial(n - k));
}
