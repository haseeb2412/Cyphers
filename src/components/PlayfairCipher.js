import React, { useState } from "react";
import "../App.css"; // make sure to import CSS

const PlayfairCipher = () => {
  const [text, setText] = useState("");
  const [key, setKey] = useState("KEYWORD");
  const [result, setResult] = useState("");

  const prepareKey = (key) => {
    key = key.toUpperCase().replace(/J/g, "I").replace(/[^A-Z]/g, "");
    let seen = new Set();
    let grid = [];

    for (let char of key + "ABCDEFGHIKLMNOPQRSTUVWXYZ") {
      if (!seen.has(char)) {
        seen.add(char);
        grid.push(char);
      }
    }
    return grid;
  };

  const encrypt = (text, keyGrid) => {
    const cleanText = text.toUpperCase().replace(/J/g, "I").replace(/[^A-Z]/g, "");
    const pairs = [];
    for (let i = 0; i < cleanText.length; i += 2) {
      const a = cleanText[i];
      const b = cleanText[i + 1] || "X";
      pairs.push(a === b ? [a, "X"] : [a, b]);
    }

    const grid = Array.from({ length: 5 }, (_, i) => keyGrid.slice(i * 5, i * 5 + 5));
    const getPos = (char) => {
      for (let row = 0; row < 5; row++) {
        const col = grid[row].indexOf(char);
        if (col !== -1) return [row, col];
      }
    };

    let encrypted = "";
    for (let [a, b] of pairs) {
      const [r1, c1] = getPos(a);
      const [r2, c2] = getPos(b);
      if (r1 === r2) {
        encrypted += grid[r1][(c1 + 1) % 5] + grid[r2][(c2 + 1) % 5];
      } else if (c1 === c2) {
        encrypted += grid[(r1 + 1) % 5][c1] + grid[(r2 + 1) % 5][c2];
      } else {
        encrypted += grid[r1][c2] + grid[r2][c1];
      }
    }

    return encrypted;
  };

  const handleEncrypt = () => {
    const keyGrid = prepareKey(key);
    const encrypted = encrypt(text, keyGrid);
    setResult(encrypted);
  };

  return (
    <div className="container">
    <h2>📦 Playfair Cipher</h2>
    <div className="form-table">
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text" />
      <input value={key} onChange={(e) => setKey(e.target.value)} placeholder="Enter key" />
      <button onClick={handleEncrypt}>Encrypt</button>
      <p className="result">Result: {result}</p>
    </div>
  </div>
  );
};

export default PlayfairCipher;
