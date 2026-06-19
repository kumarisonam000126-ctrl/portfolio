import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <h2>Sonam Kumari</h2>

      <p>React Frontend Developer</p>

      <div className="social-icons">

        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="mailto:yourmail@gmail.com">
          <FaEnvelope />
        </a>

      </div>

      <p className="copyright">
        © 2026 Sonam Kumari. All Rights Reserved.
      </p>

    </footer>
  );
};

export default Footer;