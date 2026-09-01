import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();

    if (!username.trim() || !password.trim()) {
      setError("Please enter both username and password.");
      return;
    }

    setError("");

    onLogin(username.trim());

    navigate("/home");
  }

  return (
    <section className="login-page">

      <div className="login-container">

        <h1>Mood Tracker</h1>

        <p>
          Log in to continue to your mood journal.
        </p>

        <form onSubmit={handleLogin}>

          <label htmlFor="username">
            Username
          </label>

          <input
            id="username"
            type="text"
            value={username}
            onChange={(event) =>
              setUsername(event.target.value)
            }
            placeholder="Enter your username"
          />

          <label htmlFor="password">
            Password
          </label>

          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            placeholder="Enter your password"
          />

          {error && (
            <p className="login-error">
              {error}
            </p>
          )}

          <button type="submit">
            Log In
          </button>

        </form>

      </div>

    </section>
  );
}

export default Login;
