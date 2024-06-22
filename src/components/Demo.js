import React, { useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState("");
  const prime = findNthPrime(text);
  return (
    <div className="m-4 p-4 border border-black w-96 h-96">
      <div>
        <input
          className="border border-black w-72 px-2"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>Proime : {prime}</div>
    </div>
  );
};

export default Demo;
