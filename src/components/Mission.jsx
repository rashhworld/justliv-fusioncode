import "../styles/mission.css";

const Mission = () => {
  return (
    <section className="mission-section">
      <div className="mission-content">
        <h2 className="mission-title">
          <div className="blank"></div>
          <p>Our Mission</p>
          <img src="/icons/pinkhearts.svg" alt="hearts" />
        </h2>

        <div className="mission-text">
          <p className="mission-statement">
            Parents need a simple way to find, book, and track their kids
            activities. Businesses need a better way to be found and to keep
            families coming back.
          </p>

          <div className="purpose-statement">
            <p>Our purpose is to</p>
            <p className="highlight-text">
              make parents lives <span className="pink">easier</span>,{" "}
              <span className="pink">happier</span>, and{" "}
              <span className="pink">less stressful</span>.
            </p>
          </div>

          <p className="mission-footer">
            As parents and business owners, we get it.
          </p>
        </div>

        <div className="mission-image-container">
          <img
            src="/images/family.webp"
            alt="Family enjoying outdoor activities"
            className="mission-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
