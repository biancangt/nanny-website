import React, { useState, useEffect } from "react";
import data from "../../data/index.json";

export default function MySkills() {
  const [isMobile, setIsMobile] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function toggleExpand(index) {
    setExpandedIndex(expandedIndex === index ? null : index);
  }

  if (isMobile) {
    // Mobile: accordion style
    return (
      <section className="skills--section" id="mySkills">
        <div className="portfolio--container">
          <p className="section--title"></p>
          <h2 className="skills--section--heading">Skills</h2>
        </div>
        <div style={{ width: "100%", maxWidth: "480px", margin: "0 auto" }}>
          {data?.skills?.map((item, index) => (
            <div
              key={index}
              style={{
                borderBottom: "1px solid #ccc",
                padding: "10px 0",
                cursor: "pointer",
              }}
              onClick={() => toggleExpand(index)}
              aria-expanded={expandedIndex === index}
            >
              <h3
                style={{
                  margin: 0,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "1.1rem",
                  color: "#333",
                }}
              >
                {item.title}
                <span
                  style={{
                    fontWeight: "bold",
                    transform:
                      expandedIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  +
                </span>
              </h3>
              {expandedIndex === index && (
                <p
                  style={{
                    marginTop: "8px",
                    color: "#555",
                    fontSize: "0.95rem",
                    lineHeight: "1.4",
                  }}
                >
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Desktop: cards normais
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title"></p>
        <h2 className="skills--section--heading">Skills</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
