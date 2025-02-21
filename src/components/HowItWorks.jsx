import "../styles/howItWorks.css";

const HowItWorks = () => {
  const steps = [
    {
      icon: "/icons/search.svg",
      title: "Browse",
      description: "Discover activities from our partner booking providers.",
    },
    {
      icon: "/icons/calendar.svg",
      title: "Build",
      description:
        "Share your child's interests, schedule, and preferences. Watch as JustLiv creates the perfect calendar filled with activities.",
      stepper: "/images/downArrow.png",
    },
    {
      icon: "/icons/heart.svg",
      title: "Book",
      description:
        "Finalize your selections with one click and enjoy peace of mind.",
      stepper: "/images/twistedArrow.png",
    },
  ];

  return (
    <section className="how-it-works">
      <h2 className="section-title">How it works</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-item">
            <div className="step-icon">
              <img src={step.icon} alt={step.title} />
            </div>
            <div className="step-description">
              <div className="title">
                <img src={step.stepper} alt={step.title} />
                <h3>{step.title}</h3>
              </div>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
