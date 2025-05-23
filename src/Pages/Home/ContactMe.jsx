import React from "react";
import { FaEnvelope, FaSms } from "react-icons/fa";

const buttonStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "10px 20px",
  fontSize: "1rem",
  backgroundColor: "#d46a92",     // rosa médio
  color: "#4a4a4a",               // texto escuro
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

const buttonHoverStyle = {
  backgroundColor: "#f48fb1",     // rosa claro ao hover
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  padding: "40px 20px",
  minHeight: "100px",
  color: "#4a4a4a",
  fontFamily: "Arial, sans-serif",
};

const buttonGroupStyle = {
  display: "flex",
  gap: "16px",
  flexWrap: "wrap",
  justifyContent: "center",
};

export default function ContactMe() {
  const [hovered, setHovered] = React.useState(null);

  return (
    <section id="contactMe" style={containerStyle}>
      <h2 className="skills--section--heading">Contact Me:</h2>

      <div style={buttonGroupStyle}>
        <a href="sms:+5127663804" style={{ textDecoration: "none" }}>
          <button
            style={{
              ...buttonStyle,
              ...(hovered === "sms" ? buttonHoverStyle : {}),
            }}
            onMouseEnter={() => setHovered("sms")}
            onMouseLeave={() => setHovered(null)}
          >
            <FaSms size={20} />
            Text
          </button>
        </a>

        <a
          href="mailto:persons_roe_0u@icloud.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button
            style={{
              ...buttonStyle,
              ...(hovered === "email" ? buttonHoverStyle : {}),
            }}
            onMouseEnter={() => setHovered("email")}
            onMouseLeave={() => setHovered(null)}
          >
            <FaEnvelope size={20} />
            Email
          </button>
        </a>
      </div>
    </section>
  );
}
