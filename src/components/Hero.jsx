import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <img src="/images/hero.png" alt="hero" className="hero-background" />
      <div className="hero-content">
        <h1 className="hero-title">
          Your Child's Perfect Schedule
          <br />
          in Just a Few Clicks
        </h1>
        <p className="hero-subtitle">Less Planning, More Living.</p>
        <div>
          <button className="cta-button">
            <img src="/icons/star.svg" alt="star" />
            Join the waiting list
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
