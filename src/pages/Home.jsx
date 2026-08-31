
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-page">


      <div className="clover-animation" aria-hidden="true">
  <div className="clover">
    <span className="leaf leaf-one"></span>
    <span className="leaf leaf-two"></span>
    <span className="leaf leaf-three"></span>
    <span className="leaf leaf-four"></span>
    <span className="clover-center"></span>
  </div>

  <div className="clover-stem"></div>
</div>

      <h1>Welcome to Mood Tracker</h1>

            <p className="home-message">
  Take a moment each day to check in with yourself and keep track of
  your emotional well-being.
</p>

      <div className="home-buttons">

        <Link to="/journal">
          <button type="button">
            Start Today's Journal
          </button>
        </Link>

        <Link to="/about">
          <button type="button">
            About Me
          </button>
        </Link>

      </div>

    </section>
  );
}

export default Home;
