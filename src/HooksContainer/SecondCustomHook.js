import React, { useState } from "react";
import InputCustomHook from "./InputCustomHook";

function SecondCustomHook() {
  const [firstName, bindFirstName, resetFirstName] = InputCustomHook("");
  const [secondName, bindsecondName, resetsecondName] = InputCustomHook("");

  const handleClick = (e) => {
    e.preventDefault();
    alert(`firstname ${firstName} second ${secondName}`);
    resetFirstName();
    resetsecondName();
  };
  return (
    <div>
      <form onSubmit={handleClick}>
        <input type="text" {...bindFirstName} />
        <input type="text" {...bindsecondName} />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default SecondCustomHook;
