import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Journal from "./pages/Journal";
import Calendar from "./pages/Calendar";
import Login from "./pages/login";

import "./App.css";

function App() {
  const [moodEntries, setMoodEntries] = useState([]);

  const [loggedInUser, setLoggedInUser] = useState(
    localStorage.getItem("loggedInUser") || ""
  );

  /* Load saved mood entries */

  useEffect(() => {
    const savedEntries = localStorage.getItem("moodEntries");

    if (savedEntries) {
      setMoodEntries(JSON.parse(savedEntries));
    }
  }, []);

  /* Save mood entries */

  useEffect(() => {
    localStorage.setItem(
      "moodEntries",
      JSON.stringify(moodEntries)
    );
  }, [moodEntries]);

  /* Login */

  function handleLogin(username) {
    localStorage.setItem("loggedInUser", username);
    setLoggedInUser(username);
  }

  /* Logout */

  function handleLogout() {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser("");
  }

  /* Add mood entry */

  function addMoodEntry(newEntry) {
    setMoodEntries((currentEntries) => [
      ...currentEntries,
      newEntry
    ]);
  }

  /* Delete mood entry */

  function deleteMoodEntry(id) {
    setMoodEntries((currentEntries) =>
      currentEntries.filter((entry) => entry.id !== id)
    );
  }

  /* Update mood entry */

  function updateMoodEntry(updatedEntry) {
    setMoodEntries((currentEntries) =>
      currentEntries.map((entry) =>
        entry.id === updatedEntry.id
          ? updatedEntry
          : entry
      )
    );
  }

  return (
    <div className="app">

      <Header
        loggedInUser={loggedInUser}
        onLogout={handleLogout}
      />

      <main>

        <Routes>

          {/* Main URL */}

          <Route
            path="/"
            element={
              loggedInUser ? (
                <Navigate to="/home" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Login */}

          <Route
            path="/login"
            element={
              loggedInUser ? (
                <Navigate to="/home" replace />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />

          {/* Home */}

          <Route
            path="/home"
            element={
              loggedInUser ? (
                <Home />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Journal */}

          <Route
            path="/journal"
            element={
              loggedInUser ? (
                <Journal
                  moodEntries={moodEntries}
                  addMoodEntry={addMoodEntry}
                  deleteMoodEntry={deleteMoodEntry}
                  updateMoodEntry={updateMoodEntry}
                />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Calendar */}

          <Route
            path="/calendar"
            element={
              loggedInUser ? (
                <Calendar
                  moodEntries={moodEntries}
                />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* About */}

          <Route
            path="/about"
            element={
              loggedInUser ? (
                <About />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Unknown URL */}

          <Route
            path="*"
            element={
              <Navigate
                to={loggedInUser ? "/home" : "/login"}
                replace
              />
            }
          />

        </Routes>

      </main>

      <Footer />

    </div>
  );
}

export default App;