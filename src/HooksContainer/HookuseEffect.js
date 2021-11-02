import React, { useState, useEffect } from "react";

function HookuseEffect() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log(" useEffect -render");
    document.title = `u press ${time}`;
  }, [time]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setTime(time + 1)}> You press {time} </button>
    </div>
  );
}

export default HookuseEffect;
