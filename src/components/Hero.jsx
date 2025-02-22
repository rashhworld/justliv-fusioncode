import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <img src="/images/hero.webp" alt="hero" className="hero-bg-desktop" />
      <img src="/images/heroMobile.webp" alt="hero" className="hero-bg-mobile" />
      <div className="hero-content">
        <h1 className="hero-title">
          Your Child's Perfect Schedule in Just a Few Clicks
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
