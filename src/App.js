import React, { useState } from "react";
import CaesarCipher from "./components/CaesarCipher";
import RailFenceCipher from "./components/RailFenceCipher";
import PlayfairCipher from "./components/PlayfairCipher";
import OtpCipher from "./components/OtpCipher";
import VigenereCipher from "./components/VigenereCipher";
import "./App.css";
const App = () => {
  const [cipher, setCipher] = useState("caesar");

  const renderCipherComponent = () => {
    switch (cipher) {
      case "caesar":
        return <CaesarCipher />;
      case "rail":
        return <RailFenceCipher />;
      case "playfair":
        return <PlayfairCipher />;
      case "otp":
        return <OtpCipher />;
      case "vigenere":
        return <VigenereCipher />;
      default:
        return null;
    }
  };

  return (
    <>
      <nav className="navbar">
        <h1>Muhammad Haseeb</h1>
      </nav>

      <div style={{ padding: "20px" }}>
        <div className="header">
          <h2>🛡 Cipher Tool</h2>
          <select value={cipher} onChange={(e) => setCipher(e.target.value)}>
            <option value="caesar">Caesar Cipher</option>
            <option value="rail">Rail Fence Cipher</option>
            <option value="playfair">Playfair Cipher</option>
            <option value="otp">OTP Cipher</option>
            <option value="vigenere">Vigenère Cipher</option>
          </select>
        </div>
        {renderCipherComponent()}
      </div>
    </>
  );
};

export default App;
