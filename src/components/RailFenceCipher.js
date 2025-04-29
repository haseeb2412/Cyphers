import React, { useState } from "react";
import "../App.css"; // make sure to import CSS

const RailFenceCipher = () => {
  const [text, setText] = useState("");
  const [rails, setRails] = useState(3);
  const [result, setResult] = useState("");

  const encryptRailFence = (str, numRails) => {
    if (numRails === 1) return str;
    let rail = Array.from({ length: numRails }, () => []);
    let dirDown = false, row = 0;

    for (let char of str) {
      rail[row].push(char);
      if (row === 0 || row === numRails - 1) dirDown = !dirDown;
      row += dirDown ? 1 : -1;
    }

    return rail.flat().join("");
  };

  const handleEncrypt = () => {
    const encrypted = encryptRailFence(text, parseInt(rails));
    setResult(encrypted);
  };

  return (
    <div className="container">
      <h2>🚂 Rail Fence Cipher</h2>
      <div className="form-table">
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text" />
        <input type="number" value={rails} onChange={(e) => setRails(e.target.value)} placeholder="Rails" />
        <button onClick={handleEncrypt}>Encrypt</button>
        <p className="result">Result: {result}</p>
      </div>
    </div>
  );
};

export default RailFenceCipher;
