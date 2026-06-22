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
          <a href="https://github.com/K-Blaze" target="
