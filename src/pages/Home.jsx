import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-page">
      <h1>Welcome to Mood Tracker</h1>

      <p>
        Mood Tracker helps you record how you feel, add notes about your day,
        and look back at your mood patterns.
      </p>

      <p>
        Take a moment each day to check in with yourself and keep track of
        your emotional well-being.
      </p>

      <Link to="/journal">
        <button type="button">Start Today's Journal</button>
      </Link>
    </section>
  );
}

export default Home;