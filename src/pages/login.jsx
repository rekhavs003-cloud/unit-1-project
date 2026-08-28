import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();

    if (!username.trim() || !password.trim()) {
      setError("Please enter your username and password.");
      return;
    }

    setError("");

   
    localStorage.setItem("loggedIn", "true");

    navigate("/journal");
  }

  return (
    <section className="page login-page">
      <div className="card login-card">
        <h1>Welcome to My Mood Journal 🌱</h1>

        <p>Please log in to continue.</p>

        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter username"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter password"
          />

          {error && <p className="form-error">{error}</p>}

          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
}

export default Login;


