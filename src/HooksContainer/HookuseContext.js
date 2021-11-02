import React, { useContext } from "react";
import { countContext } from "../App";
// import { NameContext } from "./../App";

function HookuseContext() {
  const countState = useContext(countContext);
  //   const name = useContext(NameContext);
  return (
    <div>
      count - {countState.countState}
      <button onClick={() => countState.countDispatch("Increment")}>
        Increment
      </button>
    </div>
  );
}

export default HookuseContext;
