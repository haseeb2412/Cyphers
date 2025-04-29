import React, { useState } from "react";
import "../App.css"; // make sure to import CSS

const CaesarCipher = () => {
  const [text, setText] = useState("");
  const [shift, setShift] = useState(3);
  const [result, setResult] = useState("");

  const handleEncrypt = () => {
    const encrypted = text
      .split("")
      .map((char) => {
        const code = char.charCodeAt(0);
        if (char.match(/[a-z]/i)) {
          const base = char === char.toUpperCase() ? 65 : 97;
          return String.fromCharCode(((code - base + parseInt(shift)) % 26) + base);
        }
        return char;
      })
      .join("");
    setResult(encrypted);
  };

  return (
    <div className="container">
    <h2>🔐 Caesar Cipher</h2>
    <div className="form-table">
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text" />
      <input type="number" value={shift} onChange={(e) => setShift(e.target.value)} placeholder="Shift" />
      <button onClick={handleEncrypt}>Encrypt</button>
      <p className="result">Result: {result}</p>
    </div>
  </div>
  );
};

export default CaesarCipher;
