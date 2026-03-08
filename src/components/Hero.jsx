import "../styles/hero.css";
import { businessData } from "../data/business";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${businessData.heroImage})`,
      }}
    >
      <div className="overlay">
        <h1>{businessData.tagline}</h1>
        <a href="#contact" className="btn">
          Order Now
        </a>
      </div>
    </section>
  );
}
