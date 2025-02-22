import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/images/logo1.webp" alt="logo" width={115} />
        </div>

        <div className="footer-social">
          <a
            href="https://www.instagram.com/justlivatx?igsh=MWo3czd1MXh3cQ%3D%3D&utm_source=qr"
            target="_blank"
          >
            <img src="/icons/instagram.svg" alt="Instagram" />
            Connect with us on Instagram ♡
          </a>
        </div>

        <nav className="footer-links">
          <div className="policies">
            <a href="https://justliv.org/privacy-policy" target="_blank">
              Privacy policy
            </a>
            <a
              href="https://justliv.org/accessibility-statement"
              target="_blank"
            >
              Accessibility Statement
            </a>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/company/justliv-app-for-busy-parents/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <img
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                className="social-icon"
              />
            </a>
          </div>

          <div className="footer-copyright">© 2024 by JustLiv</div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
