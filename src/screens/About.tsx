import React from "react";

export default function About() {
  return (
    <div>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>About Me</h1>
        <p style={styles.heroSub}>The story behind the crown</p>
      </div>
      <div style={styles.section}>
        <div style={styles.grid}>
          <div style={styles.avatarCol}>
            <div style={styles.avatar}>KB</div>
            <p style={styles.name}>K-BLAZE</p>
            <p style={styles.realName}>Kenyada Peoples</p>
            <p style={styles.location}>Chicago, IL</p>
            <p style={styles.pronouns}>She/Her</p>
          </div>
          <div>
            <h2 style={styles.bioTitle}>My Story</h2>
            <p style={styles.bioText}>
              I'm a wife, mom, entrepreneur, music artist, and now a full stack
              developer. While the world saw just a mom, I was building backends
              and writing React components.
            </p>
            <p style={styles.bioText}>
              I'm completing my Software Development program at Pivot Tech
              School, graduating June 23rd. It's never too late to level up.
            </p>
            <p style={styles.bioText}>
              Through BeautifullyHers I celebrate natural beauty and wellness.
              Through music as EPiCBLAZE I express my soul. Through code I build
              it all into something real.
            </p>
            <hr style={styles.divider} />
            <h3 style={styles.subTitle}>Tech Skills</h3>
            <div style={styles.skillsRow}>
              {skills.map((s) => (
                <span key={s} style={styles.skill}>
                  {s}
                </span>
              ))}
            </div>
            <hr style={styles.divider} />
            <h3 style={styles.subTitle}>Connect With Me</h3>
            <div style={styles.linkRow}>
              <a
                href="https://github.com/K-Blaze"
                target="_blank"
                rel="noreferrer"
                style={styles.btnPrimary}
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/kenyada-peoples"
                target="_blank"
                rel="noreferrer"
                style={styles.btnOutline}
              >
                LinkedIn
              </a>
              <a
                href="https://www.youtube.com/watch?v=4rvgBhsH8zk"
                target="_blank"
                rel="noreferrer"
                style={styles.btnOutline}
              >
                My Music
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "JavaScript",
  "HTML/CSS",
  "Git/GitHub",
  "REST APIs",
];

const styles: { [key: string]: React.CSSProperties } = {
  hero: {
    background: "#000",
    color: "#fff",
    padding: "3rem 2rem",
    textAlign: "center",
    borderBottom: "3px solid #ff1493",
  },
  heroTitle: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#ff1493",
    letterSpacing: "4px",
    marginBottom: "0.5rem",
  },
  heroSub: {
    color: "#ccc",
    fontSize: "16px",
  },
  section: {
    padding: "3rem 2rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "200px 1fr",
    gap: "3rem",
    alignItems: "start",
  },
  avatarCol: {
    textAlign: "center",
  },
  avatar: {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    background: "#ff1493",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "42px",
    fontWeight: "bold",
    color: "#000",
    margin: "0 auto",
    border: "4px solid #ff1493",
  },
  name: {
    color: "#ff1493",
    fontWeight: "bold",
    fontSize: "18px",
    marginTop: "1rem",
  },
  realName: {
    color: "#555",
    fontSize: "14px",
    marginTop: "0.25rem",
  },
  location: {
    color: "#888",
    fontSize: "13px",
    marginTop: "0.25rem",
  },
  pronouns: {
    color: "#888",
    fontSize: "13px",
    marginTop: "0.25rem",
  },
  bioTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#ff1493",
    marginBottom: "1rem",
  },
  bioText: {
    color: "#555",
    lineHeight: "1.8",
    marginBottom: "1rem",
    fontSize: "15px",
  },
  divider: {
    border: "none",
    borderTop: "1px solid #ff1493",
    opacity: 0.3,
    margin: "1.5rem 0",
  },
  subTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#ff1493",
    marginBottom: "0.75rem",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
  skillsRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  skill: {
    background: "#ff1493",
    color: "#fff",
    padding: "0.25rem 0.75rem",
    borderRadius: "999px",
    fontSize: "13px",
    fontWeight: "bold",
  },
  linkRow: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
  },
  btnPrimary: {
    background: "#ff1493",
    color: "#fff",
    padding: "0.6rem 1.4rem",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "14px",
  },
  btnOutline: {
    border: "2px solid #ff1493",
    color: "#ff1493",
    padding: "0.6rem 1.4rem",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "14px",
  },
};
