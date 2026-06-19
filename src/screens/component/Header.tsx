import React from "react";

interface Props {
  currentPage: string;
  onNavigate: (page: any) => void;
}

export default function Header({ currentPage, onNavigate }: Props) {
  return (
    <header style={styles.header}>
      <span style={styles.logo}>K-BLAZE</span>
      <nav style={styles.nav}>
        <button
          style={{
            ...styles.link,
            color: currentPage === "home" ? "#ff1493" : "#fff",
          }}
          onClick={() => onNavigate("home")}
        >
          Home
        </button>
        <button
          style={{
            ...styles.link,
            color: currentPage === "about" ? "#ff1493" : "#fff",
          }}
          onClick={() => onNavigate("about")}
        >
          About
        </button>
      </nav>
    </header>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    background: "#000",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "3px solid #ff1493",
  },
  logo: {
    color: "#ff1493",
    fontSize: "22px",
    fontWeight: "bold",
    letterSpacing: "4px",
  },
  nav: {
    display: "flex",
    gap: "2rem",
  },
  link: {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "500",
  },
};
