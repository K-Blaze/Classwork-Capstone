import React, { useState } from "react";

interface Props {
  onSwitch: () => void;
  onLogin: (username: string) => void;
}

export default function Login({ onSwitch, onLogin }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!username || !password) {
      setMessage("Missing username or password");
      return;
    }

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Request failed");
        return data;
      })
      .then((data) => {
        setMessage(data.message);
        onLogin(username);
      })
      .catch((err) => setMessage(err.message));
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <input
        style={styles.input}
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={styles.input}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={styles.button} onClick={handleSubmit}>
        Login
      </button>
      <p>
        Need an account?{" "}
        <span style={styles.link} onClick={onSwitch}>
          Register
        </span>
      </p>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "400px",
    margin: "80px auto",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
  },
  input: {
    padding: "0.75rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  button: {
    padding: "0.75rem",
    backgroundColor: "#90ee90",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  link: {
    color: "blue",
    cursor: "pointer",
    textDecoration: "underline",
  },
  message: {
    color: "blue",
    textAlign: "center",
    fontWeight: "bold",
  },
};
