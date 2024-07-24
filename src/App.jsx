import { createSignal } from "solid-js";
import "./App.css";
import { ProbEstimatorFactory } from "./estimator/ProbEstimatorFactory.js";

function App() {
    const [n, setN] = createSignal(0);
    const [p, setP] = createSignal(0);
    const [binomProb, setBinomProb] = createSignal(0);
    const [geomProb, setGeomProb] = createSignal(0);

    const factory = new ProbEstimatorFactory();
    const binomProbEstimator = factory.createBinomProbEstimator();
    const geomProbEstimator = factory.createGeomProbEstimator();

    return (
        <div class="card">
            <h2>Рассчёт вероятности успеха.</h2>
            <div>
                <p>Количество независимых испытаний 𝑛, целое число: </p>
                <input
                    type="number"
                    value={n()}
                    onChange={(event) =>
                        setN(Math.trunc(Number(event.target.value)))
                    }
                    min={0}
                    max={100}
                />
            </div>
            <div>
                <p>Вероятность успеха в одном испытании 𝑝, 0-100%: </p>
                <input
                    type="number"
                    value={p()}
                    onChange={(event) => setP(Number(event.target.value))}
                    min={0}
                    max={100}
                />
            </div>
            <div>
                <p>Вероятность хотя бы одного успеха в 𝑛 испытаниях:</p>
                <button
                    onClick={() =>
                        setBinomProb(binomProbEstimator.estimate(n(), p()))
                    }
                >
                    Посчитать
                </button>
            </div>
            <div class="result">
                <div>{binomProb()} %</div>
            </div>
            <div>
                <p>
                    Вероятность того, что число испытаний, проводимых до первого
                    успеха, включая последнее, успешное испытание будет не
                    больше 𝑛:
                </p>
                <button
                    onClick={() =>
                        setGeomProb(geomProbEstimator.estimate(n(), p()))
                    }
                >
                    Посчитать
                </button>
            </div>
            <div class="result">
                <div>{geomProb()} %</div>
            </div>
        </div>
    );
}

export default App;
