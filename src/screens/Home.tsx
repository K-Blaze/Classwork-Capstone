import React from "react";

interface Props {
  onNavigate: (page: any) => void;
}

export default function Home({ onNavigate }: Props) {
  return (
    <div>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>K-BLAZE</h1>
        <p style={styles.tagline}>
          Wife. Mom. Developer. Artist. Entrepreneur.
        </p>
        <p style={styles.heroSub}>
          Building beauty, music, and code — one crown at a time.
        </p>
        <div style={styles.btnRow}>
          <a
            href="https://github.com/K-Blaze"
            target="_blank"
            rel="noreferrer"
            style={styles.btnPrimary}
          >
            GitHub
          </a>
          <a
            href="https://www.youtube.com/watch?v=4rvgBhsH8zk"
            target="_blank"
            rel="noreferrer"
            style={styles.btnOutline}
          >
            My Music
          </a>
          <button style={styles.btnOutline} onClick={() => onNavigate("about")}>
            About Me
          </button>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>What I Do</h2>
        <div style={styles.cardGrid}>
          {cards.map((card) => (
            <div key={card.title} style={styles.card}>
              <p style={styles.cardIcon}>{card.icon}</p>
              <h3 style={styles.cardTitle}>{card.title}</h3>
              <p style={styles.cardText}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.darkSection}>
        <h2 style={styles.sectionTitle}>Fun Facts</h2>
        <div style={styles.factsGrid}>
          {facts.map((fact) => (
            <div key={fact} style={styles.factBadge}>
              {fact}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const cards = [
  {
    icon: "💻",
    title: "Full Stack Developer",
    text: "React, TypeScript, Node.js, Express — building real apps from scratch.",
  },
  {
    icon: "✨",
    title: "BeautifullyHers",
    text: "Natural wellness & beauty brand celebrating every woman's glow.",
  },
  {
    icon: "🎵",
    title: "Music Artist",
    text: "EPiCBLAZE — creating music that moves the soul.",
  },
  {
    icon: "📱",
    title: "Content Creator",
    text: "TikTok creator sharing real life, real beauty, real code.",
  },
];

const facts = [
  "Wife & Mom first, always 👑",
  "Software Dev student at Pivot Tech",
  "Natural wellness enthusiast",
  "Music artist — EPiCBLAZE",
  "Crown never crooked",
  "AI is my secret weapon",
];

const styles: { [key: string]: React.CSSProperties } = {
  hero: {
    background: "#000",
    color: "#fff",
    padding: "4rem 2rem",
    textAlign: "center",
  },
  heroTitle: {
    fontSize: "56px",
    fontWeight: "bold",
    color: "#ff1493",
    letterSpacing: "6px",
    marginBottom: "1rem",
  },
  tagline: { fontSize: "20px", color: "#ff1493", marginBottom: "0.75rem" },
  heroSub: { fontSize: "16px", color: "#ccc", marginBottom: "2rem" },
  btnRow: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    flexWrap: "wrap" as const,
  },
  btnPrimary: {
    background: "#ff1493",
    color: "#000",
    padding: "0.6rem 1.5rem",
    borderRadius: "20px",
    fontWeight: "bold",
    textDecoration: "none",
    fontSize: "14px",
    border: "none",
    cursor: "pointer",
  },
  btnOutline: {
    background: "transparent",
    color: "#ff1493",
    padding: "0.6rem 1.5rem",
    borderRadius: "20px",
    fontWeight: "bold",
    textDecoration: "none",
    fontSize: "14px",
    border: "1.5px solid #ff1493",
    cursor: "pointer",
  },
  section: { padding: "3rem 2rem", background: "#fff" },
  darkSection: { padding: "3rem 2rem", background: "#0a0a0a" },
  sectionTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#ff1493",
    textAlign: "center",
    marginBottom: "2rem",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1rem",
  },
  card: {
    background: "#000",
    border: "1px solid #ff1493",
    borderRadius: "12px",
    padding: "1.5rem",
    textAlign: "center",
  },
  cardIcon: { fontSize: "32px", marginBottom: "0.75rem" },
  cardTitle: {
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  cardText: { color: "#aaa", fontSize: "14px", lineHeight: "1.6" },
  factsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "1rem",
  },
  factBadge: {
    background: "#ff1493",
    borderRadius: "8px",
    padding: "1rem",
    textAlign: "center",
    color: "#000",
    fontWeight: "bold",
    fontSize: "14px",
  },
};
