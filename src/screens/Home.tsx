import React from "react";

interface Props {
  onNavigate: (page: any) => void;
}

const BASE = "https://raw.githubusercontent.com/K-Blaze/Classwork-Capstone/main/";

const products = [
  { img: "IMG_20260622_062404 (3)(1).png", name: "Anx — Anxiety + Tension", desc: "May relieve symptoms of anxiety and tension. Doctor formulated.", price: "$42.00" },
  { img: "IMG_20260622_062404 (2)(1).png", name: "Ins — Insomnia", desc: "May relieve sleeplessness caused by anxiety, restlessness, or stress.", price: "$42.00" },
  { img: "IMG_20260622_062404 (1)(1).png", name: "Mp — Menopause", desc: "May relieve hot flashes and hormonal imbalance. With Black Cohosh.", price: "$42.00" },
  { img: "IMG_20260622_062336(1).jpg", name: "BpS — Back Pain + Sciatica", desc: "Homeopathic relief for back pain and sciatica symptoms.", price: "$42.00" },
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
          <img src={BASE + "IMG_20260622_062348(1).jpg"} alt="K-Blaze Founder and CEO" style={styles.founderImg} />
          <div style={styles.founderText}>
            <h2 style={styles.founderTitle}>Meet the Founder & CEO</h2>
            <p style={styles.founderBio}>I'm Kenyada Peoples — known as K-Blaze. Wife, mom, entrepreneur, and the heart behind BeautifullyHers. Our homeopathic oral sprays are made from natural, plant-based ingredients that work with your body. No harsh chemicals. No synthetic drugs. Just pure wellness, beautifully crafted for her.</p>
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
          <img src={BASE + "IMG_20260622_062357(1).jpg"} alt="BeautifullyHers products" style={styles.salonImg} />
        </div>

        <div style={styles.productGrid}>
          {products.map((product) => (
            <div key={product.name} style={styles.productCard}>
              <img src={BASE + product.img} alt={product.name} style={styles.productImg} />
              <h3 style={styles.productName}>{product.name}</h3>
              <p style={styles.productDesc}>{product.desc}</p>
              <p style={styles.productPrice}>{product.price}</p>
              <a href="https://neighborgoods.net" target="_blank" rel="noreferrer" style={styles.shopBtn}>Shop Now</a>
            </div>
          ))}
        </div>

        <div style={styles.braidingBox}>
          <img src={BASE + "IMG_20260622_062352(1).jpg"} alt="BeautifullyHers Braiding" style={styles.braidingImg} />
          <div style={styles.braidingText}>
            <h3 style={styles.braidingTitle}>BeautifullyHers Braiding Services</h3>
            <p style={styles.braidingDesc}>Professional braiding services at our salon. Custom styles, protective styles, and more — all beautifully crafted for her.</p>
            <p style={styles.braidingPrice}>Starting at $300</p>
            <a href="tel:3192622393" style={styles.shopBtn}>Book Now</a>
          </div>
        </div>

        <div style={styles.ingredientsBox}>
          <h3 style={styles.ingredientsTitle}>What's Inside Our Sprays</h3>
          <p style={styles.ingredientsText}>Each BeautifullyHers homeopathic oral spray is made from natural, plant-based ingredients. No harsh chemicals. No synthetic drugs. Just pure wellness.</p>
          <div style={styles.benefitsGrid}>
            {benefits.map((b) => (
              <div key={b} style={styles.benefitBadge}>{b}</div>
            ))}
          </div>
        </div>

        <div style={styles.pricingRow}>
          {bundles.map((bundle) => (
            <div key={bundle.name} style={styles.bundleCard}>
              <h3 style={styles.bundleName}>{bundle.name}</h3>
              <p style={styles.bundlePrice}>{bundle.price}</p>
              <p style={styles.bundleDesc}>{bundle.desc}</p>
              <a href="https://neighborgoods.net" target="_blank" rel="noreferrer" style={styles.shopBtn}>Get Started</a>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.darkSection}>
        <h2 style={styles.sectionTitle}>Fun Facts</h2>
        <div style={styles.factsGrid}>
          {facts.map((fact) => (
            <div key={fact} style={styles.factBadge}>{fact}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  hero: { background: "#000", color: "#fff", padding: "4rem 2rem", textAlign: "center" },
  heroTitle: { fontSize: "56px", fontWeight: "bold", color: "#ff1493", letterSpacing: "6px", marginBottom: "1rem" },
  tagline: { fontSize: "20px", color: "#ff1493", marginBottom: "0.75rem" },
  heroSub: { fontSize: "16px", color: "#ccc", marginBottom: "2rem" },
  btnRow: { display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" as const },
  btnPrimary: { background: "#ff1493", color: "#000", padding: "0.6rem 1.5rem", borderRadius: "20px", fontWeight: "bold", textDecoration: "none", fontSize: "14px", border: "none", cursor: "pointer" },
  btnOutline: { background: "transparent", color: "#ff1493", padding: "0.6rem 1.5rem", borderRadius: "20px", fontWeight: "bold", textDecoration: "none", fontSize: "14px", border: "1.5px solid #ff1493", cursor: "pointer" },
  founderSection: { background: "#111", padding: "2rem" },
  founderInner: { display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" as const },
  founderImg: { width: "220px", height: "220px", objectFit: "cover" as const, borderRadius: "12px", border: "2px solid #ff1493" },
  founderText: { flex: 1, minWidth: "200px" },
  founderTitle: { color: "#ff1493", fontSize: "22px", fontWeight: "bold", marginBottom: "0.75rem" },
  founderBio: { color: "#ccc", fontSize: "14px", lineHeight: "1.8", marginBottom: "1rem" },
  trustBadge: { background: "#ff1493", color: "#000", padding: "0.5rem 1rem", borderRadius: "8px", fontWeight: "bold", fontSize: "12px", display: "inline-block" },
  section: { padding: "3rem 2rem", background: "#fff" },
  darkSection: { padding: "3rem 2rem", background: "#0a0a0a" },
  sectionTitle: { fontSize: "22px", fontWeight: "bold", color: "#ff1493", textAlign: "center", marginBottom: "2rem" },
  cardGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" },
  card: { background: "#000", border: "1px solid #ff1493", borderRadius: "12px", padding: "1.5rem", textAlign: "center" },
  cardIcon: { fontSize: "32px", marginBottom: "0.75rem" },
  cardTitle: { color: "#fff", fontSize: "16px", fontWeight: "bold", marginBottom: "0.5rem" },
  cardText: { color: "#aaa", fontSize: "14px", lineHeight: "1.6" },
  factsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" },
  factBadge: { background: "#ff1493", borderRadius: "8px", padding: "1rem", textAlign: "center", color: "#000", fontWeight: "bold", fontSize: "14px" },
  shopSection: { padding: "3rem 2rem", background: "#0a0a0a" },
  shopTitle: { fontSize: "28px", fontWeight: "bold", color: "#ff1493", textAlign: "center", marginBottom: "0.5rem" },
  shopSubtitle: { fontSize: "14px", color: "#aaa", textAlign: "center", marginBottom: "2rem" },
  salonRow: { display: "flex", gap: "1rem", marginBottom: "2rem", flexWrap: "wrap" as const, justifyContent: "center" },
  salonImg: { width: "200px", height: "150px", objectFit: "cover" as const, borderRadius: "12px", border: "1px solid #ff1493" },
  productGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.5rem", marginBottom: "2rem" },
  productCard: { background: "#111", border: "1px solid #ff1493", borderRadius: "12px", padding: "1rem", textAlign: "center" },
  productImg: { width: "100%", height: "160px", objectFit: "cover" as const, borderRadius: "8px", marginBottom: "0.75rem" },
  productName: { color: "#ff1493", fontSize: "14px", fontWeight: "bold", marginBottom: "0.5rem" },
  productDesc: { color: "#aaa", fontSize: "12px", lineHeight: "1.6", marginBottom: "0.75rem" },
  productPrice: { color: "#fff", fontSize: "18px", fontWeight: "bold", marginBottom: "0.75rem" },
  shopBtn: { background: "#ff1493", color: "#000", padding: "0.6rem 1.5rem", borderRadius: "20px", fontWeight: "bold", textDecoration: "none", fontSize: "13px", display: "inline-block" },
  braidingBox: { display: "flex", gap: "2rem", alignItems: "center", background: "#111", borderRadius: "12px", padding: "2rem", marginBottom: "2rem", flexWrap: "wrap" as const },
  braidingImg: { width: "250px", height: "200px", objectFit: "cover" as const, borderRadius: "12px", border: "2px solid #ff1493" },
  braidingText: { flex: 1, minWidth: "200px" },
  braidingTitle: { color: "#ff1493", fontSize: "18px", fontWeight: "bold", marginBottom: "0.75rem" },
  braidingDesc: { color: "#ccc", fontSize: "14px", lineHeight: "1.8", marginBottom: "1rem" },
  braidingPrice: { color: "#fff", fontSize: "24px", fontWeight: "bold", marginBottom: "1rem" },
  ingredientsBox: { background: "#111", borderRadius: "12px", padding: "2rem", marginBottom: "2rem" },
  ingredientsTitle: { color: "#ff1493", fontSize: "20px", fontWeight: "bold", marginBottom: "1rem", textAlign: "center" },
  ingredientsText: { color: "#ccc", fontSize: "14px", lineHeight: "1.8", marginBottom: "1.5rem", textAlign: "center" },
  benefitsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem" },
  benefitBadge: { background: "#000", border: "1px solid #ff1493", borderRadius: "8px", padding: "0.75rem", textAlign: "center", color: "#fff", fontSize: "13px", fontWeight: "bold" },
  pricingRow: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" },
  bundleCard: { background: "#111", border: "2px solid #ff1493", borderRadius: "12px", padding: "1.5rem", textAlign: "center" },
  bundleName: { color: "#ff1493", fontSize: "18px", fontWeight: "bold", marginBottom: "0.5rem" },
  bundlePrice: { color: "#fff", fontSize: "28px", fontWeight: "bold", marginBottom: "0.5rem" },
  bundleDesc: { color: "#aaa", fontSize: "13px", marginBottom: "1rem" },
};
