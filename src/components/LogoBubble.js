// src/components/LogoBubble.jsx
import React from "react";
import logo from "../assests/logo.png"; // ✅ Import your company logo

export default function LogoBubble({ size = 40 }) {
  return (
    <img
      src={logo}
      alt="CyberMind Works"
      style={{
        width: size,
        height: size,
        objectFit: "contain",
        borderRadius: "50%", // makes it bullet style
        background: "#fff",
        padding: "4px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      }}
    />
  );
}
