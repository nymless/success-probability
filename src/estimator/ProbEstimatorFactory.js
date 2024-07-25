import { binom } from "../distribution/binom.js";
import { geom } from "../distribution/geom.js";
import { EstimatorFactory } from "./EstimatorFactory.js";
import { BinomProbEstimator, GeomProbEstimator } from "./ProbEstimator.js";

export class ProbEstimatorFactory extends EstimatorFactory {
    createBinomProbEstimator() {
        return new BinomProbEstimator(binom);
    }

    createGeomProbEstimator() {
        return new GeomProbEstimator(geom);
    }
}
