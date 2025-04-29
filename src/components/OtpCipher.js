import React, { useState } from "react";
import "../App.css"; // make sure to import CSS

const OtpCipher = () => {
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [result, setResult] = useState("");

  const encrypt = (text, key) => {
    if (key.length < text.length) return "Key must be as long as text";

    let encrypted = "";
    for (let i = 0; i < text.length; i++) {
      const c = text.charCodeAt(i) ^ key.charCodeAt(i);
      encrypted += String.fromCharCode(c);
    }

    return btoa(encrypted); // base64 encoding
  };

  const handleEncrypt = () => {
    const encrypted = encrypt(text, key);
    setResult(encrypted);
  };

  return (
    <div className="container">
      <h2>🔐 OTP Cipher (One-Time Pad)</h2>
      <div className="form-table">
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text" />
        <input value={key} onChange={(e) => setKey(e.target.value)} placeholder="Enter key (same length)" />
        <button onClick={handleEncrypt}>Encrypt</button>
        <p className="result">Result (Base64): {result}</p>
      </div>
    </div>
  );
};

export default OtpCipher;
