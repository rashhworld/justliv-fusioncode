import "../styles/cta.css";

const Cta = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">Ready to Simplify Your Life?</h2>
        <p className="cta-description">
          Be the first to know when we launch! Join our waiting list and
          <br />
          get exclusive updates and early access to our journey.
        </p>
        <button>
          <img src="/icons/star.svg" alt="star" height={20} />
          Join the waiting list
        </button>
      </div>
    </section>
  );
};

export default Cta;
