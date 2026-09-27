import React from "react";

const cards = [
  {
    title: "Vite + React",
    body: "Hot module reload dev server bound to port 3000 inside the container.",
  },
  {
    title: "Docker Compose",
    body: "docker-compose.alloy.yaml runs the web service with network_mode: host.",
  },
  {
    title: "Alloy preview",
    body: "Alloy proxies http://localhost:8080 to the frontend port declared in .alloy/environment.json.",
  },
];

export default function App() {
  return (
    <main
      style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "64px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 40,
      }}
    >
      <header style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <span
          style={{
            alignSelf: "flex-start",
            fontSize: 12,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#7dd3fc",
            border: "1px solid #1e3a57",
            borderRadius: 999,
            padding: "6px 12px",
          }}
        >
          Alloy sandbox ready
        </span>
        <h1 style={{ margin: 0, fontSize: 40, lineHeight: 1.15 }}>rishikesh</h1>
        <p style={{ margin: 0, fontSize: 18, color: "#9fb0c9", maxWidth: 620 }}>
          This repository is configured to boot in an Alloy session through
          Docker Compose. Replace this starter page with the real application as
          it grows.
        </p>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
        }}
      >
        {cards.map((card) => (
          <article
            key={card.title}
            style={{
              background: "#17233d",
              border: "1px solid #26375a",
              borderRadius: 12,
              padding: 20,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <h2 style={{ margin: 0, fontSize: 17 }}>{card.title}</h2>
            <p style={{ margin: 0, fontSize: 14, color: "#9fb0c9", lineHeight: 1.6 }}>
              {card.body}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
