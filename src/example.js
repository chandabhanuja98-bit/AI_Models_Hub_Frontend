import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(13);

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  const additionvalues = () => {
    setResult(Number(num1) + Number(num2));
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="app">
      <h1 className="main-heading">✨ React Mini Dashboard</h1>

      <div className="container">
        {/* Calculator Card */}
        <div className="card">
          <h2 className="title">🧮 Calculator</h2>

          <div className="input-group">
            <input
              type="number"
              placeholder="Enter First Number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
            />

            <input
              type="number"
              placeholder="Enter Second Number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
            />
          </div>

          <button className="calculate-btn" onClick={additionvalues}>
            Calculate Sum
          </button>

          <div className="result-box">
            <span>Result</span>
            <h1>{result}</h1>
          </div>
        </div>

        {/* Counter Card */}
        <div className="card">
          <h2 className="title">🚀 Count Tracker</h2>

          <div className="counter-box">
            <h1>{count}</h1>
          </div>

          <div className="btn-group">
            <button className="btn increment" onClick={increaseCount}>
              ➕ Increment
            </button>

            <button className="btn decrement" onClick={decreaseCount}>
              ➖ Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;