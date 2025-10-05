import astronaut from "../images/astronaut.jpg";
import "../css/hero.css";

function Hero() {
  return (
    <section className="hero">
      <img src={astronaut} alt="Astronaut" />
      <div className="hero-text">
        <h1>THE HERO SECTION</h1>
        <p>the main sectiopn of the page</p>
      </div>
    </section>
  );
}

export default Hero;
