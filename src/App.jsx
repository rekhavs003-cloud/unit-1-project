import React from "react";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    const savedEntries = localStorage.getItem("moodEntries");

    if (savedEntries) {
      setMoodEntries(JSON.parse(savedEntries));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("moodEntries", JSON.stringify(moodEntries));
  }, [moodEntries]);

  function addMoodEntry(newEntry) {
    setMoodEntries((currentEntries) => [...currentEntries, newEntry]);
  }

  function deleteMoodEntry(id) {
    setMoodEntries((currentEntries) =>
      currentEntries.filter((entry) => entry.id !== id)
    );
  }

  function updateMoodEntry(updatedEntry) {
    setMoodEntries((currentEntries) =>
      currentEntries.map((entry) =>
        entry.id === updatedEntry.id ? updatedEntry : entry
      )
    );
  }

  return (
    <div className="app">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />

<Route path="/login" element={<Login />} />

<Route path="/home" element={<Home />} />

          <Route
            path="/journal"
            element={
              <Journal
                moodEntries={moodEntries}
                addMoodEntry={addMoodEntry}
                deleteMoodEntry={deleteMoodEntry}
                updateMoodEntry={updateMoodEntry}
              />
            }
          />

          <Route
            path="/calendar"
            element={<Calendar moodEntries={moodEntries} />}
          />

          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;