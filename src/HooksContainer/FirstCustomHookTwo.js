import React, { useState } from "react";
import useCustomHook from "./customHook";

function FirstCustomHookTwo() {
  const [count, setCount] = useState(0);
  useCustomHook(count);
  return (
    <div>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        count {count}
      </button>
    </div>
  );
}

export default FirstCustomHookTwo;
