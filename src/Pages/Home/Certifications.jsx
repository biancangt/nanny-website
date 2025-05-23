import React, { useState, useEffect } from "react";
import data from "../../data/index.json";

function ReadMore({ text, school }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 1200);
    }

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile) {
    // Desktop: show school + full text
    return (
      <>
        {school && <p className="certification--section--school">{school}</p>}
        <p className="text-md">{text}</p>
      </>
    );
  }

  // Mobile: show toggleable text + school only if expanded
  return (
    <div>
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          style={{
            background: "none",
            border: "none",
            color: "#007bff",
            cursor: "pointer",
            padding: 0,
            fontSize: "inherit",
            textDecoration: "underline",
          }}
          aria-expanded={isExpanded}
        >
          Read more
        </button>
      )}
      <div style={{ display: isExpanded ? "block" : "none" }}>
        {school && <p className="certification--section--school">{school}</p>}
        <p className="text-md">
          {text}{" "}
          <button
            onClick={() => setIsExpanded(false)}
            style={{
              background: "none",
              border: "none",
              color: "#007bff",
              cursor: "pointer",
              padding: 0,
              fontSize: "inherit",
              textDecoration: "underline",
            }}
            aria-expanded={isExpanded}
          >
            Read less
          </button>
        </p>
      </div>
    </div>
  );
}

export default function Certification() {
  return (
    <section className="certification--section" id="certification">
      <div className="certification--container-box">
        <div className="certification--container">
          <p className="sub--title"></p>
          <h2 className="section--heading">Education</h2>
        </div>
      </div>
      <div className="certification--section--container">
        {data?.certification?.map((item) => (
          <div key={item.id} className="certification--section--card">
            <div className="certification--section--img">
              <img src={item.src} alt={item.title} />
            </div>
            <div className="certification--section--card--content">
              <div>
                <h3 className="certification--section--title">{item.title}</h3>
                <ReadMore text={item.description} school={item.school} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
