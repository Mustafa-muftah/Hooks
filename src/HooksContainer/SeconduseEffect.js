import React, { useState, useEffect } from "react";

function SeconduseEffect() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMouseMove = (e) => {
    console.log("mouse move");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect rendered");
    window.addEventListener("mousemove", logMouseMove);

    return () => {
      console.log("removed listner");
      window.removeEventListener("mousemove", logMouseMove);
    };
  }, []);
  return (
    <div>
      the X - {x} Y -{y}
    </div>
  );
}

export default SeconduseEffect;
