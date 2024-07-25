import { Estimator } from "./Estimator.js";

export class BinomProbEstimator extends Estimator {
    constructor(binomDistribution) {
        super();
        this.binom = binomDistribution;
    }

    estimate(n, p) {
        if (n === 0) {
            return 0;
        } else if (n === 1) {
            return p;
        }
        return ((1 - this.binom(n, p / 100)[0]) * 100).toFixed(2);
    }
}

export class GeomProbEstimator extends Estimator {
    constructor(geomDistribution) {
        super();
        this.geom = geomDistribution;
    }

    estimate(n, p) {
        if (n === 0) {
            return 0;
        }
        return (this.geom(n, p / 100)[n - 1] * 100).toFixed(2);
    }
}
