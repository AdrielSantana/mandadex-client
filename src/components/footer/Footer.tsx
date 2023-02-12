"use client";

import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer>
        <Container className="footer-container">
          <span className="copy">
            <p>MandaDex 2023 &copy; Todos direitos reservados</p>
          </span>
          <p className="owner-text">
            Powered by{" "}
            <a
              href="https://github.com/AdrielSantana"
              target="_blank"
              rel="noreferrer"
              className="owner"
            >
              Adriel Santana
            </a>
          </p>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
