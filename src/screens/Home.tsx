import React from "react";

interface Props {
  onNavigate: (page: any) => void;
}

const BASE = "https://raw.githubusercontent.com/K-Blaze/Classwork-Capstone/main/";

const products = [
  { img: "IMG_20260622_062404 (3)(1).png", name: "Anx — Anxiety + Tension", desc: "May relieve symptoms of anxiety and tension. Doctor formulated.", price: "$42.00" },
  { img: "IMG_20260622_062404 (2)(1).png", name: "Ins — Insomnia", desc: "May relieve sleeplessness caused by anxiety, restlessness, or stress.", price: "$42.00" },
  { img: "IMG_20260622_062404 (1)(1).png", name: "Mp — Menopause", desc: "May relieve hot flashes and hormonal imbalance. With Black Cohosh.", price: "$42.00" },
  { img: "IMG_20260622_062404(1).jpg", name: "BpS — Back Pain + Sciatica", desc: "Homeopathic relief for back pain and sciatica symptoms.", price: "$42.00" },
  { img: "IMG_20260622_062404.png", name: "Pain Relief", desc: "Natural homeopathic pain relief. Doctor formulated.", price: "$42.00" },
  { img: "IMG_20260622_062352.png", name: "TH — Tension Headache", desc: "May relieve tension headache symptoms naturally.", price: "$42.00" },
];

const bundles = [
  { name: "Single Spray", price: "$42", desc: "1 Oral Spray — 3-5 day delivery" },
  { name: "Bundle x3", price: "$110", desc: "3 Oral Sprays — 3-5 day delivery" },
  { name: "Bundle x6", price: "$200", desc: "6 Oral Sprays — 3-5 day delivery" },
];

const benefits = [
  "No Known Side Effects",
  "No Drug Interactions",
  "Money Back Guarantee",
  "Doctor Formulated",
];

const cards = [
  { icon: "💻", title: "Software Developer", text: "React, TypeScript, Node.js, Express — building real apps from scratch." },
  { icon: "✨", title: "BeautifullyHers", text: "Natural wellness & beauty brand celebrating every woman's glow." },
  { icon: "🎵", title: "Music Artist", text: "EPiCBLAZE — creating music that moves the soul." },
  { icon: "📱", title: "Content Creator", text: "TikTok creator sharing real life, real beauty, real code." },
];

const facts = [
  "Wife & Mom first, always 👑",
  "Software Dev student at Pivot Tech",
  "Natural wellness enthusiast",
  "Music artist — EPiCBLAZE",
  "Crown never crooked",
  "AI is my secret weapon",
];

export default function Home({ onNavigate }: Props) {
  return (
    <div>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>K-BLAZE</h1>
        <p style={styles.tagline}>Wife. Mom. Developer. Artist. Entrepreneur.</p>
        <p style={styles.heroSub}>Building beauty, music, and code — one crown at a time.</p>
        <div style={styles.btnRow}>
          <a href="https://github.com/K-Blaze" target="_blank" rel="noreferrer" style={styles.btnPrimary}>GitHub</a>
          <a href="https://www.youtube.com/watch?v=4rvgBhsH8zk" target="_blank" rel="noreferrer" style={styles.btnOutline}>My Music</a>
          <button style={styles.btnOutline} onClick={() => onNavigate("about")}>About Me</button>
        </div>
      </div>

      <div style={styles.founderSection}>
        <div style={styles.founderInner}>
          <img src={BASE + "IMG_20260622_062336(1).jpg"} alt="K-Blaze founder" style={styles.founderImg} />
          <div style={styles.founderText}>
            <h2 style={styles.founderTitle}>Meet the Founder</h2>
            <p style={styles.founderBio}>I'm K-Blaze — wife, mom, entrepreneur, and the heart behind BeautifullyHers. Our homeopathic oral sprays are made from natural, plant-based ingredients that work with your body. No harsh chemicals. No synthetic drugs. Just pure wellness, beautifully crafted for her.</p>
            <div style={styles.trustBadge}>Iowa Business Against Human Trafficking — Certified Partner</div>
          </div>
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

      <div style={styles.shopSection}>
        <h2 style={styles.shopTitle}>BeautifullyHers Oral Sprays</h2>
        <p style={styles.shopSubtitle}>Natural. Homeopathic. Doctor Formulated. EST. 1994</p>

        <div style={styles.salonRow}>
          <img src={BASE + "IMG_20260622_062316(1).jpg"} alt="BeautifullyHers Salon" style={styles.salonImg} />
          <img src={BASE + "IMG_20260622_062412(1).png"} alt="Whats inside our sprays" style={styles.salonImg} />
          <img src={BASE + "IMG_20260622_062357(1).jpg"} alt="Pink mason jars" style={styles.salonImg} />
        </div>

        <div style={styles.productGrid}>
          {products.map((product) => (
            <div key={product.name} style={styles.productCard}>
              <img src={BASE + product.img} alt={product.name} style={styles.productImg} />
              <h3 style={styles.productName}>{product.name}</h3>
              <p
