import React from "react";
import ReactDOM from "react-dom";
import {
  Arrays,
  Async,
  Closures,
  Floats,
  Functions,
  Objects,
  Operators,
  Scopes,
  Strings
} from "./Questions";

import "./styles.css";

const Questions = [
  <Operators />,
  <Floats />,
  <Closures />,
  <Strings />,
  <Scopes />,
  <Functions />,
  <Arrays />,
  <Objects />
  // <Async />
];

function App() {
  return (
    <div className="App">
      <h1>JS - Testing basic concepts</h1>
      <ol className="list">
        {Questions.map((Q, idx) => (
          <li key={idx}>{Q}</li>
        ))}
      </ol>
      Questions are referred from -
      <a
        target="_blank"
        href="https://github.com/h5bp/Front-end-Developer-Interview-Questions/"
        rel="noopener noreferrer"
      >
        github:h5bp/Front-end-Developer-Interview-Questions
      </a>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
