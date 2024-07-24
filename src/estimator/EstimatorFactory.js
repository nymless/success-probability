export class EstimatorFactory {
    createBinomProbEstimator() {
        throw new Error(
            "This is an abstract method. It should be overwritten!"
        );
    }

    createGeomProbEstimator() {
        throw new Error(
            "This is an abstract method. It should be overwritten!"
        );
    }
}
