import { createSignal } from "solid-js";
import "./App.css";
import { binom } from "./stats/binom.js";

function App() {
    const [n, setN] = createSignal(0);
    const [p, setP] = createSignal(0);
    const [prob, setProb] = createSignal(0);

    const calcProb = (n, p) => {
        if (n === 0) {
            return 0;
        } else if (n === 1) {
            return p;
        }
        return ((1 - binom(n, p / 100)[0]) * 100).toFixed(2);
    };

    const handleCalcClick = () => {
        setN(Math.trunc(n()));
        setProb(calcProb(n(), p()));
    };

    return (
        <div class="card">
            <h2>Рассчёт вероятности успеха.</h2>
            <div>
                <p>Количество независимых испытаний, целое число: </p>
                <input
                    type="number"
                    value={n()}
                    onChange={(event) => setN(Number(event.target.value))}
                    min={0}
                    max={100}
                />
            </div>
            <div>
                <p>Вероятность успеха в одном испытании, 0-100%: </p>
                <input
                    type="number"
                    value={p()}
                    onChange={(event) => setP(Number(event.target.value))}
                    min={0}
                    max={100}
                />
            </div>
            <div>
                <p>Вероятность хотя бы одного успеха в n испытаниях:</p>
                <button onClick={handleCalcClick}>Посчитать</button>
            </div>
            <div class="result">
                <div>{prob()} %</div>
            </div>
        </div>
    );
}

export default App;
