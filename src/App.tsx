import React, { useState } from "react";
import Header from "./screens/component/Header";
import Home from "./screens/Home";
import About from "./screens/About";
import "./styles.css";

type Page = "home" | "about";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  console.log("test");
  return (
    <div>
      <Header currentPage={page} onNavigate={setPage} />
      {page === "home" ? <Home onNavigate={setPage} /> : <About />}
    </div>
  );
}
