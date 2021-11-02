import React, { useState, useEffect } from "react";

function ForthuseEffect() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const Interval = setInterval(increaseCount, 1000);
    return () => {
      clearInterval(Interval);
    };
  }, [count]);
  return <div>{count}</div>;
}

export default ForthuseEffect;
