import { binom } from "../distribution/binom.js";
import { geom } from "../distribution/geom.js";
import { Estimator } from "./Estimator.js";

export class BinomProbEstimator extends Estimator {
    estimate(n, p) {
        if (n === 0) {
            return 0;
        } else if (n === 1) {
            return p;
        }
        return ((1 - binom(n, p / 100)[0]) * 100).toFixed(2);
    }
}

export class GeomProbEstimator extends Estimator {
    estimate(n, p) {
        if (n === 0) {
            return 0;
        }
        return (geom(n, p / 100)[n - 1] * 100).toFixed(2);
    }
}
