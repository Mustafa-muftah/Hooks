import React, { useState } from "react";

function HookuseState() {
  const [name, setName] = useState({ firstName: "", secondName: "" });

  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.secondName}
        onChange={(e) => setName({ ...name, secondName: e.target.value })}
      />
      <h3>The first name {name.firstName}</h3>
      <h3>The first name {name.secondName}</h3>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
}

export default HookuseState;
