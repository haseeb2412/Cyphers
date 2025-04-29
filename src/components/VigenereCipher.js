import React, { useState } from "react";
import "../App.css"; // make sure to import CSS

const VigenereCipher = () => {
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [result, setResult] = useState("");

  const encrypt = (text, key) => {
    text = text.toUpperCase().replace(/[^A-Z]/g, "");
    key = key.toUpperCase().replace(/[^A-Z]/g, "");

    let encrypted = "";
    for (let i = 0; i < text.length; i++) {
      const t = text.charCodeAt(i) - 65;
      const k = key.charCodeAt(i % key.length) - 65;
      encrypted += String.fromCharCode(((t + k) % 26) + 65);
    }

    return encrypted;
  };

  const handleEncrypt = () => {
    const encrypted = encrypt(text, key);
    setResult(encrypted);
  };

  return (
    <div className="container">
    <h2>🔡 Vigenère Cipher</h2>
    <div className="form-table">
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text" />
      <input value={key} onChange={(e) => setKey(e.target.value)} placeholder="Enter key" />
      <button onClick={handleEncrypt}>Encrypt</button>
      <p className="result">Result: {result}</p>
    </div>
  </div>
  );
};

export default VigenereCipher;
