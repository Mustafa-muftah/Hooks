import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, firstCounter: state.firstCounter + action.payload };
    case "IncrementSecond":
      return { ...state, secondCounter: state.secondCounter + action.payload };
    case "Decrement":
      return { ...state, firstCounter: state.firstCounter - action.payload };
    case "Reset":
      return initialState;
    default:
      return state;
  }
};

function SeconduseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      count - {count.firstCounter}
      count - {count.secondCounter}
      <button onClick={() => dispatch({ type: "Increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "Decrement", payload: 5 })}>
        Decrement
      </button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
      <button onClick={() => dispatch({ type: "IncrementSecond", payload: 5 })}>
        Increment
      </button>
    </div>
  );
}

export default SeconduseReducer;
