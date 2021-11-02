import React, { useReducer } from "react";
import HookuseState from "./HooksContainer/HookuseState";
import ArrayuseStateHook from "./HooksContainer/ArrayuseStateHook";
import HookuseEffect from "./HooksContainer/HookuseEffect";
import SeconduseEffect from "./HooksContainer/SeconduseEffect";
import ThirduseEffect from "./HooksContainer/ThirduseEffect";
import ForthuseEffect from "./ForthuseEffect";
import FetchingData from "./HooksContainer/FetchingData";
import WrapuseContext from "./HooksContainer/WrapuseContext";
import HookuseReducer from "./HooksContainer/HookuseReducer";
import SeconduseReducer from "./HooksContainer/SeconduseReducer";
import FetchinguseReducer from "./HooksContainer/FetchinguseReducer";
import HookuseRef from "./HooksContainer/HookuseRef";
import SeconduseRef from "./HooksContainer/SeconduseRef";
import FirstCustomHook from "./HooksContainer/FirstCustomHook";
import FirstCustomHookTwo from "./HooksContainer/FirstCustomHookTwo";
import SecondCustomHook from "./HooksContainer/SecondCustomHook";

// export const NameContext = React.createContext();
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return initialState;
    default:
      return state;
  }
};
export const countContext = React.createContext();
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {/* <HookuseState />
      <ArrayuseStateHook /> */}
      {/* <HookuseEffect /> */}
      {/* <SeconduseEffect /> */}
      {/* <ThirduseEffect /> */}
      {/* <ForthuseEffect /> */}
      {/* <FetchingData /> */}
      {/* <countContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <WrapuseContext />
      </countContext.Provider> */}
      {/* <HookuseReducer /> */}
      {/* <SeconduseReducer /> */}
      {/* count- {count} */}
      {/* <FetchinguseReducer /> */}
      {/* <HookuseRef /> */}
      {/* <SeconduseRef /> */}
      {/* <FirstCustomHook />
      <FirstCustomHookTwo /> */}
      <SecondCustomHook />
    </div>
  );
}

export default App;
