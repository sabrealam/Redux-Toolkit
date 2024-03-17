import { useEffect, useState } from "react";
import "./App.css";
import { createStore } from "redux";

let initState = {};

let reducer = (state, action) => {
  switch (action.type) {
    case "Print": {
      return {
        ...state,
        message: action.payload,
      };
    }
    case "Color": {
      return {
        ...state,
        color: function () {
          let r = Math.floor(Math.random() * 256);
          let g = Math.floor(Math.random() * 256);
          let b = Math.floor(Math.random() * 256);
          return `rgb(${r},${g},${b})`;
        },
      };
    }
    default: {
      return state;
    }
  }
};

let store = createStore(reducer, initState);

function App() {
  const [count, setCount] = useState("");

  let printSomthing = (value) => {
    store.dispatch({ type: "Print", payload: value });
    console.log(store.getState());
  };

  let changeColor = () => {
    store.dispatch({ type: "Color" });
    console.log(store.getState());
  };

  store.subscribe(() => {
    setCount(store.getState());
  });

  return (
    <>
      <h2> {JSON.stringify(store.getState())} </h2>
      <button onClick={(e) => printSomthing(e.target.innerText)}>
        Print Hello World
      </button>
      <br />
      <br />
      {/* <button onClick={changeColor}>Change Color</button> */}
    </>
  );
}

export default App;
