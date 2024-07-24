import { EstimatorFactory } from "./EstimatorFactory.js";
import { BinomProbEstimator } from "./ProbEstimator.js";
import { GeomProbEstimator } from "./ProbEstimator.js";

export class ProbEstimatorFactory extends EstimatorFactory {
    createBinomProbEstimator() {
        return new BinomProbEstimator();
    }

    createGeomProbEstimator() {
        return new GeomProbEstimator();
    }
}
