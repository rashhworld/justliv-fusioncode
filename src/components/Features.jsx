import "../styles/features.css";

const Features = () => {
  const features = [
    {
      icon: "/icons/star.svg",
      title: "Custom Calendar",
      description:
        "Our Custom Activities Calendar instantly creates a personalized activity schedule based on your preferences, budget, and location. No more endless searching or juggling calendars.",
      image: "/images/laptop.webp",
    },
    {
      icon: "/icons/star.svg",
      title: "Tailored to Your Interests",
      description:
        "Filters let you choose activities by age, category, price, and more. Social features help you sync schedules with friends and see what they're attending.",
      image: "/images/child.webp",
    },
    {
      icon: "/icons/star.svg",
      title: "Stress-Free Bulk Booking",
      description:
        "Book all your child's activities in just a few clicks. Our platform handles the details so you don't have to.",
      image: "/images/mother1.webp",
    },
  ];

  return (
    <section className="features-section">
      <h2 className="features-title">Why JustLiv?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-content">
              <img
                src={feature.icon}
                alt={feature.title}
                className="feature-icon"
              />
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
            <div className="feature-image-container">
              <img
                src={feature.image}
                alt={feature.title}
                className="feature-image"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
