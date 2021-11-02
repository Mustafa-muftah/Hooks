import React, { useState } from "react";
import SeconduseEffect from "./SeconduseEffect";

function ThirduseEffect() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Mouse</button>
      {display && <SeconduseEffect />}
    </div>
  );
}

export default ThirduseEffect;
