import React, { useState, useEffect, useRef } from "react";

function SeconduseRef() {
  const [timer, setTimer] = useState(0);
  const IntervalRef = useRef();
  useEffect(() => {
    IntervalRef.current = setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);
    return () => {
      clearInterval(IntervalRef.current);
    };
  }, []);
  return (
    <div>
      {timer}
      <button onClick={() => clearInterval(IntervalRef.current)}>Clear</button>
    </div>
  );
}

export default SeconduseRef;
