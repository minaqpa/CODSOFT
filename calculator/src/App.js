import React from "react";
import "./App.css";
import { useState } from "react";
/* eslint no-eval: 0 */
function App() {
  const [displayResult, setDisplayResult] = useState("");
  const dataHanlder = (event) => {
    setDisplayResult(displayResult.concat(event.target.value));
  };

  const clearDisplayHandler = () => {
    setDisplayResult("");
  };
  const equalHandler = () => {
    setDisplayResult(eval(displayResult).toString());
  };

  return (
    <>
      <div className="calculate">
        <h1 className="head">calculator</h1>
        <input
          type="text"
          className="answer"
          placeholder="0"
          value={displayResult}
        />
        <input
          type="button"
          value="9"
          className="button"
          onClick={() => dataHanlder}
        />
        <input
          type="button"
          value="8"
          className="button"
          onClick={dataHanlder}
        />
        <input
          type="button"
          value="7"
          className="button"
          onClick={dataHanlder}
        />
        <input
          type="button"
          value="6"
          className="button"
          onClick={dataHanlder}
        />
        <input
          type="button"
          value="5"
          className="button"
          onClick={dataHanlder}
        />
        <input
          type="button"
          value="4"
          className="button"
          onClick={dataHanlder}
        />
        <input
          type="button"
          value="3"
          className="button"
          onClick={dataHanlder}
        />
        <input
          type="button"
          value="2"
          className="button"
          onClick={dataHanlder}
        />
        <input
          type="button"
          value="1"
          className="button"
          onClick={dataHanlder}
        />
        <input
          type="button"
          value="0"
          className="button"
          onClick={dataHanlder}
        />
        <input
          type="button"
          value="."
          className="button"
          onClick={dataHanlder}
        />
        <input
          type="button"
          value="+"
          className="button"
          onClick={dataHanlder}
        />
        <input
          type="button"
          value="-"
          className="button"
          onClick={dataHanlder}
        />
        <input
          type="button"
          value="*"
          className="button"
          onClick={dataHanlder}
        />
        <input
          type="button"
          value="/"
          className="button"
          onClick={dataHanlder}
        />
        <input
          type="button"
          value="%"
          className="button"
          onClick={dataHanlder}
        />
        <input
          type="button"
          value="AC"
          className="button btn1"
          onClick={clearDisplayHandler}
        />
        <input
          type="button"
          value="="
          className="button btn1"
          onClick={equalHandler}
        />
      </div>
    </>
  );
}

export default App;
