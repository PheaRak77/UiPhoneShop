import { useState } from "react";

function Textinput() {
  const [Name, setName] = useState("");
  function HanlderChange(e) {
    setName(e.target.value);
  }
  return (
    <>
      <div>
        <input
          value={Name}
          onChange={HanlderChange}
          placeholder="enter your name !"
        />
        <button onClick={() => setName("")}>Reset</button>
        <p>Yout_Name: {Name}</p>
      </div>
    </>
  );
}

export default Textinput;
